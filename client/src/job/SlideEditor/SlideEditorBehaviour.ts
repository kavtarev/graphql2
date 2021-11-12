import * as React from 'react';
import axios from 'axios';
import { MutationFunction } from 'react-apollo';
import * as isEmpty from 'validator/lib/isEmpty';
import * as isUrl from 'validator/lib/isURL';
import { History } from 'history';
import { ApolloError } from 'apollo-client';

import { uploadImage } from '../UploadImage';
import { SlideEditorTemplate } from './SlideEditorTemplate';
import {
    CreatePodcastMutationAdmin,
    CreatePodcastMutationAdminVariables,
    Platform,
    PodcastMutationAdmin,
    PodcastMutationAdminVariables,
    PodcastQueryAdmin_getPodcastById,
    PodcastQueryAdmin_getPodcastById_episodes,
    PodcastQueryAdmin_getPodcastById_episodes_mainSection,
    PodcastQueryAdmin_getPodcastById_platformLinks,
    PodcastQueryAdmin_systemConfig,
} from '../apollo-query-types';
import { LayoutRenderComponentProps } from '../routes';
import { createMapFromArray } from '../../common/createMapFromArray';
import { URLComposer, URLResolutionType } from '../../URLComposer';
import { DeepOmit } from '../../common/DeepOmit';
import { URLParser } from '../../../../frontend/pablo/components/common/URLParser';
import { MainSection } from '../../../../frontend/pablo/modules/admin/publication/controllers/PublicationController';

const deleteImage = (url: string) => {
    axios.delete('/api/image', {
        params: {
            url,
        },
    });
};

export type ActiveTab = 'main' | 'episodes';

interface Props {
    podcastQueryAdmin?: PodcastQueryAdmin_getPodcastById;
    systemConfig: PodcastQueryAdmin_systemConfig;
    urlComposer: URLComposer;
    layoutRenderComponent: React.ComponentType<LayoutRenderComponentProps>;
    updatePodcast?: MutationFunction<PodcastMutationAdmin, PodcastMutationAdminVariables>;
    createPodcast?: MutationFunction<CreatePodcastMutationAdmin,
        CreatePodcastMutationAdminVariables>;
    history: History;
}

export type PlatformLink = Omit<PodcastQueryAdmin_getPodcastById_platformLinks, '__typename'>;

export type Episode = DeepOmit<PodcastQueryAdmin_getPodcastById_episodes, '__typename'>;

export interface UIEpisode extends Episode {
    isEditing: boolean;
    url: string;
    isNew: boolean;
}

export interface EditionPodcastState {
    activeTab: ActiveTab;
    address: string;
    title: string;
    shortDescriptionForList: string;
    description: string;
    currentImageUrl: string;
    newImageUrl: string;
    coverBackgroundColor: string;
    isLoadingNewImageUrl: boolean;
    hasUnsavedChanges: boolean;
    currentSeasonCount: number;
    episodes: UIEpisode[];
    platformLinks: PlatformLinkTranslated;
    errors: Errors;
}

type ErrorEpisode = {
    title?: ErrorsField;
    url?: ErrorsField;
};

type ErrorPlatformLink = {
    [index: string]: ErrorsField;
};

type ErrorEpisodesMap = {
    [index: number]: ErrorEpisode;
};

type ErrorsField =  { [index: string]: string };

export type Errors = {
    title: ErrorsField,
    address: ErrorsField,
    description: ErrorsField,
    shortDescriptionForList: ErrorsField,
    coverBackgroundColor: ErrorsField,
    currentImageUrl: ErrorsField,
    episodes: ErrorEpisodesMap,
    platformLinks: ErrorPlatformLink,
};

const EMPTY_FIELD_ERROR = 'Поле обязательно для заполнения';
const NOT_VALID_URL = 'Неправильная ссылка';
const NO_ADDRESS_ID_URL = 'Ссылка не относится к публикации на сайте';
const CYRILLIC_ERROR = 'Допускаются латинские символы и цифры';
const SYMBOL_LENGTH_ERROR = 'Введите 6 символов';
const HEX_FORMAT_ERROR = 'Неверный формат';

export const platformsTitle: Record<Platform, string> = {
    [Platform.APPLE]: 'Apple Podcasts',
    [Platform.CASTBOX]: 'Castbox',
    [Platform.GOOGLE] : 'Google Podcasts',
    [Platform.OVERCAST]: 'Overcast',
    [Platform.VK]: 'ВКонтакте',
    [Platform.YANDEX]: 'Яндекс.Музыка',
    [Platform.POCKETCASTS]: 'Pocket Casts',
    [Platform.YOUTUBE]: 'Youtube',
};

export type PlatformLinkTranslated = Map<Platform, { link: string, platform: string }>;

const createActualPlatformLinks = (
    platformLinksInBase: PlatformLink[],
): PlatformLinkTranslated => {
    const objectLinks = createMapFromArray(platformLinksInBase, 'platform');

    return (Object.keys(platformsTitle) as Platform[]).reduce(
        (acc, platform) => {
            return acc.set(platform, {
                platform,
                link: objectLinks[platform] ? objectLinks[platform].link : '',
            });
        },
        new Map<Platform, { link: string, platform: string }>(),
    );
};

const defaultErrorState: Errors = {
    title: {},
    address: {},
    description: {},
    shortDescriptionForList: {},
    currentImageUrl: {},
    episodes: {},
    platformLinks: {},
    coverBackgroundColor: {},
};

const defaultState: EditionPodcastState = {
    activeTab: 'main',
    title: '',
    address: '',
    currentImageUrl: '',
    newImageUrl: '',
    description: '',
    coverBackgroundColor: '',
    isLoadingNewImageUrl: false,
    hasUnsavedChanges: false,
    shortDescriptionForList: '',
    currentSeasonCount: 1,
    episodes: [],
    platformLinks: createActualPlatformLinks([]),
    errors: defaultErrorState,
};

export class SlideEditorBehaviour extends React.Component<Props, EditionPodcastState> {
    constructor(props: Props) {
        super(props);
        if (this.props.podcastQueryAdmin) {
            const {
                title,
                address,
                description,
                shortDescriptionForList,
                coverImageUrl,
                coverBackgroundColor,
                currentSeasonCount,
                episodes,
                platformLinks,
            } = this.props.podcastQueryAdmin;

            this.state = {
                title,
                address,
                description,
                shortDescriptionForList,
                currentSeasonCount,
                coverBackgroundColor,
                activeTab: 'episodes',
                currentImageUrl: coverImageUrl,
                newImageUrl: coverImageUrl,
                isLoadingNewImageUrl: false,
                hasUnsavedChanges: false,
                episodes: episodes.map(({ __typename, ...episode }) => ({
                    ...episode,
                    isEditing: false,
                    isNew: false,
                    url: episode.address
                        ? props.urlComposer.formatPublicationUrl(
                            {
                                address: episode.address,
                            },
                            URLResolutionType.CURRENT_HOST,
                            this.clearNullKeys(episode.mainSection),
                        )
                        : '',
                })),
                platformLinks: createActualPlatformLinks(platformLinks),
                errors: defaultErrorState,
            };
        } else {
            this.state = { ...defaultState };
        }
    }

    public componentDidMount() {
        window.addEventListener('beforeunload', this.onBeforeUnload);
    }

    public componentWillUnmount() {
        window.removeEventListener('beforeunload', this.onBeforeUnload);
    }

    public render() {
        const {
            activeTab,
            newImageUrl,
            currentImageUrl,
            currentSeasonCount,
            description,
            episodes,
            platformLinks,
            shortDescriptionForList,
            title,
            address,
            errors,
            isLoadingNewImageUrl,
            hasUnsavedChanges,
            coverBackgroundColor,
        } = this.state;
        const isNotCanChangeAddress = !!this.props.podcastQueryAdmin?.address;
        const { createPodcast } = this.props;

        const isPageCreatePodcast = !!createPodcast;

        return React.createElement(SlideEditorTemplate, {
            activeTab,
            currentImageUrl,
            newImageUrl,
            currentSeasonCount,
            description,
            episodes,
            platformLinks,
            shortDescriptionForList,
            title,
            address,
            coverBackgroundColor,
            errors,
            isLoadingNewImageUrl,
            hasUnsavedChanges,
            isPageCreatePodcast,
            isNotCanChangeAddress,
            editPodcastLinks: this.editPodcastLinks,
            onChangeInput: this.onChangeInput,
            changeCurrentSeasonCount: this.changeCurrentSeasonCount,
            addEpisode: this.addEpisode,
            deleteEpisode: this.deleteEpisode,
            editEpisode: this.editEpisode,
            layoutRenderComponent: this.props.layoutRenderComponent,
            resetImg: this.resetImg,
            changeImageUrl: this.changeImageUrl,
            toggleTab: this.toggleTab,
            handleSubmit: this.handleSubmit,
        });
    }

    public addEpisode = () => {
        this.setState((state) => {
            const newEpisode: UIEpisode = {
                id: Math.random(),
                title: '',
                address: {
                    id: Math.random(),
                    title: '',
                },
                mainSection: {
                    sectionId: -1,
                    sectionName: '',
                    sectionAddress: '',
                    subsectionId: -1,
                    subsectionName: '',
                    isShowInMenu: true,
                    subsectionAddress: '',
                },
                isEditing: true,
                isNew: true,
                season: state.currentSeasonCount,
                publicationId:  Math.random(),
                url: '',
            };
            return { episodes: [newEpisode, ...state.episodes] };
        });
    }

    public deleteEpisode = (deletedEpisode: UIEpisode) => {
        const { hasUnsavedChanges } = this.state;

        if (!hasUnsavedChanges) {
            this.setState({ hasUnsavedChanges: true });
        }

        this.setState((state) => {
            const episodes = [...state.episodes];
            const indexEpisode = state.episodes.findIndex((episode) => {
                return deletedEpisode.id === episode.id;
            });

            episodes.splice(indexEpisode, 1);
            return { episodes };
        });
    }

    public editEpisode = (changedEpisode: UIEpisode) => {
        const { hasUnsavedChanges } = this.state;

        if (!hasUnsavedChanges) {
            this.setState({ hasUnsavedChanges: true });
        }

        this.setState((state) => {
            const episodes = [...state.episodes];
            const indexEpisode = state.episodes.findIndex((episode) => {
                return episode.id === changedEpisode.id;
            });
            episodes[indexEpisode] = changedEpisode;
            return { episodes };
        });
    }

    public onChangeInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.currentTarget.name as keyof EditionPodcastState;
        const value = e.currentTarget.value;
        const { hasUnsavedChanges } = this.state;

        if (!hasUnsavedChanges) {
            this.setState({ hasUnsavedChanges: true });
        }

        this.setState(prevState => (
            { ...prevState, [name]: value }
        ));
    }

    public editPodcastLinks = (e: React.FormEvent<HTMLInputElement>) => {
        const { hasUnsavedChanges } = this.state;

        if (!hasUnsavedChanges) {
            this.setState({ hasUnsavedChanges: true });
        }

        const name = e.currentTarget.name as Platform;
        const value = e.currentTarget.value;
        if (this.state.platformLinks.has(name)) {
            this.setState((state) => {
                const platformLinksCopy = new Map(state.platformLinks);
                platformLinksCopy.set(name, { platform: name, link: value });
                return { platformLinks: platformLinksCopy };
            });
        }
    }

    public changeCurrentSeasonCount = (currentSeasonCount: number) => {
        this.setState({ currentSeasonCount });
    }

    public toggleTab = (tab: ActiveTab) => {
        this.setState({ activeTab: tab });
    }

    public resetImg = () => {
        const { newImageUrl, currentImageUrl } = this.state;
        this.setState({ newImageUrl: '' });

        if (newImageUrl !== currentImageUrl) {
            deleteImage(newImageUrl);
        }
    }

    public changeImageUrl = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { hasUnsavedChanges } = this.state;

        if (!hasUnsavedChanges) {
            this.setState({ hasUnsavedChanges: true });
        }

        const { files } = event.target;
        const file = files && files[0];

        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onloadend = async ({ target }) => {
                try {
                    this.setState({ isLoadingNewImageUrl: true });
                    const imageUploadResponse =
                        target?.result && await uploadImage(target.result, 570);
                    if (imageUploadResponse) {
                        const newImageUrl = imageUploadResponse.data.image.previews[0].url;
                        this.setState({ newImageUrl });
                    }
                } catch (error) {
                    alert(error.message);
                } finally {
                    this.setState({ isLoadingNewImageUrl: false });
                }
            };
        }
    }

    public handleSubmit = async () => {
        if (this.validate()) {
            const { updatePodcast, history, createPodcast } = this.props;
            const {
                title,
                address,
                shortDescriptionForList,
                description,
                currentSeasonCount,
                platformLinks,
                episodes,
                newImageUrl,
                currentImageUrl,
                coverBackgroundColor,
            } = this.state;
            const podcast = {
                title,
                address,
                shortDescriptionForList,
                description,
                coverBackgroundColor,
                currentSeasonCount,
                coverImageUrl: newImageUrl
                    ? newImageUrl
                    : currentImageUrl,
                platformLinks: Array.from(platformLinks.values())
                    .filter(platform => platform.link !== '') as PlatformLink[],
                episodes: episodes.map(({ title, season, url, isNew, id  }) => {
                    const findPublicationAddressId = url.split('/');
                    const lastIndex = findPublicationAddressId.length - 1;
                    const publicationAddressId = Number(findPublicationAddressId[lastIndex]
                        .split('-')[0]);
                    return {
                        title,
                        season,
                        publicationAddressId,
                        id: isNew ? undefined : id,
                    };
                }),
            };
            try {

                if (updatePodcast) {
                    const { id } = (this.props.podcastQueryAdmin)!;
                    await updatePodcast({ variables: { podcast: { ...podcast, id } } });
                    if (currentImageUrl !== newImageUrl && currentImageUrl !== '') {
                        deleteImage(currentImageUrl);
                    }
                }

                if (createPodcast) {
                    await createPodcast({ variables: { podcast } });
                }

                history.push('/podcast');
            } catch (error) {
                const validationError = error.graphQLErrors
                    .find((error: any) => error.extensions.code === 'INTERNAL_VALIDATION_ERROR');
                if (validationError) {
                    const errorsValidate = validationError.extensions.response.body
                        .validationErrors.podcast;

                    if (errorsValidate.episodes) {
                        const errors = this.state.errors;
                        const errorsEpisodes: ErrorEpisodesMap = { ...errors.episodes };
                        errorsValidate.episodes.forEach((episode: any, index: number) => {
                            if (episode) {
                                const { id } = this.state.episodes[index];
                                errorsEpisodes[id] = {
                                    url: { serverError: episode.publicationAddressId[0] },
                                };
                            }
                        });
                        this.setState({ errors: { ...errors, episodes: errorsEpisodes } });
                    }
                }
                throw new ApolloError(error);
            }
        }
    }

    public onBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();

        if (this.state.hasUnsavedChanges) {
            e.returnValue = '';
        }
    }

    private validate() {
        let isValid = true;
        const {
            title,
            address,
            description,
            shortDescriptionForList,
            newImageUrl,
            episodes,
            platformLinks,
            coverBackgroundColor,
        } = this.state;

        if (!this.validateTitle(title)) {
            isValid = false;
        }

        if (!this.validateAddress(address)) {
            isValid = false;
        }

        if (!this.validateDescription(description)) {
            isValid = false;
        }

        if (!this.validateShortDescriptionForList(shortDescriptionForList)) {
            isValid = false;
        }

        if (!this.validateCoverBackgroundColor(coverBackgroundColor)) {
            isValid = false;
        }

        if (!this.validateImageUrl(newImageUrl)) {
            isValid = false;
        }

        if (!this.validateEpisodes(episodes)) {
            isValid = false;
        }

        if (!this.validatePlatformLinks(platformLinks)) {
            isValid = false;
        }

        return isValid;
    }

    private validateTitle(title: string) {
        let isValid = true;
        const titleErrors: ErrorsField = {};
        if (isEmpty(title)) {
            isValid = false;
            titleErrors.empty = EMPTY_FIELD_ERROR;
        }

        this.setState(prevState => ({ errors: { ...prevState.errors, title: titleErrors } }));

        return isValid;
    }

    private validateAddress(address: string) {
        let isValid = true;
        const addressErrors: ErrorsField = {};

        if (isEmpty(address)) {
            isValid = false;
            addressErrors.empty = EMPTY_FIELD_ERROR;
        }

        const checkLatinKeyboard = new RegExp('^[a-zA-Z0-9_-]+$');
        if (!checkLatinKeyboard.test(address)) {
            isValid = false;
            addressErrors.Cyrillic = CYRILLIC_ERROR;
        }

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            address: addressErrors,
        }}));

        return isValid;
    }

    private validateDescription(description: string) {
        let isValid = true;
        const descriptionErrors: ErrorsField = {};
        if (isEmpty(description)) {
            isValid = false;
            descriptionErrors.empty = EMPTY_FIELD_ERROR;
        }

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            description: descriptionErrors,
        }}));
        return isValid;
    }

    private validateShortDescriptionForList(shortDescriptionForList: string) {
        let isValid = true;
        const shortDescriptionForListErrors: ErrorsField = {};

        if (isEmpty(shortDescriptionForList)) {
            isValid = false;
            shortDescriptionForListErrors.empty = EMPTY_FIELD_ERROR;
        }

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            shortDescriptionForList: shortDescriptionForListErrors,
        }}));
        return isValid;
    }

    private validateCoverBackgroundColor(coverBackGroundColor: string) {
        let isValid = true;
        const currentCoverBackgroundColorErrors: ErrorsField = {};

        if (!coverBackGroundColor) {
            isValid = false;
            currentCoverBackgroundColorErrors.empty = EMPTY_FIELD_ERROR;
        }

        if (coverBackGroundColor.length !== 6) {
            isValid = false;
            currentCoverBackgroundColorErrors.maxLength = SYMBOL_LENGTH_ERROR;
        }

        const checkHexFormatColor = new RegExp('^[0-9a-fA-F]{6}$');
        if (!checkHexFormatColor.test(coverBackGroundColor)) {
            isValid = false;
            currentCoverBackgroundColorErrors.hexFormat = HEX_FORMAT_ERROR;
        }

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            coverBackgroundColor: currentCoverBackgroundColorErrors,
        }}));

        return isValid;
    }

    private validateImageUrl(ImageUrl: string) {
        let isValid = true;
        const currentImageUrlErrors: ErrorsField = {};

        if (isEmpty(ImageUrl)) {
            isValid = false;
            currentImageUrlErrors.empty = EMPTY_FIELD_ERROR;
        }

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            currentImageUrl: currentImageUrlErrors,
        }}));

        return isValid;
    }

    private validatePlatformLinks(platformLinks: PlatformLinkTranslated) {
        let isValid = true;
        const platformLinksErrors: ErrorPlatformLink = {};

        platformLinks.forEach(({ link }, key) => {
            const errors: ErrorsField = {};

            if (!link) {
                return;
            }

            if (!isUrl(link)) {
                isValid = false;
                errors.isUrl = NOT_VALID_URL;
            }

            platformLinksErrors[key] = errors;
        });

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            platformLinks: platformLinksErrors,
        }}));

        return isValid;
    }

    private validateEpisodes(episodes: UIEpisode[]) {
        let isValid = true;

        const errorsEpisodes: ErrorEpisodesMap = {};

        const editedEpisode = episodes.filter(episode => episode.isEditing);

        editedEpisode.forEach(({ url, title, id }) => {
            const errorsUrl: ErrorsField = {};

            if (isEmpty(url)) {
                isValid = false;
                errorsUrl.empty = EMPTY_FIELD_ERROR;
                errorsEpisodes[id] = { url: errorsUrl };
            }

            const { mainHost } = this.props.systemConfig;
            const [host] = mainHost.split(':');

            if (!isUrl(url, {
                require_tld: false,
                host_whitelist: [host],
            })
            ) {
                isValid = false;
                errorsUrl.notValidUrl = NOT_VALID_URL;
                errorsEpisodes[id] = { url: errorsUrl };
            }

            if (!errorsUrl.isUrl) {
                const { addressId } = URLParser.parse(url);

                if (!addressId) {
                    isValid = false;
                    errorsUrl.noAddressIdUrl = NO_ADDRESS_ID_URL;
                    errorsEpisodes[id] = { url: errorsUrl };
                }
            }

            if (isEmpty(title)) {
                isValid = false;
                errorsEpisodes[id] = { title : { empty: EMPTY_FIELD_ERROR } };
            }
        });

        this.setState(prevState => ({ errors: {
            ...prevState.errors,
            episodes: errorsEpisodes,
        }}));

        return isValid;
    }

    private clearNullKeys(
        mainSection: PodcastQueryAdmin_getPodcastById_episodes_mainSection,
    ): MainSection {
        const parsedMainSection = { ...mainSection };
        Object.keys(parsedMainSection).forEach(key =>
            (parsedMainSection[key as keyof typeof parsedMainSection] === null)
            && delete parsedMainSection[key as keyof typeof parsedMainSection],
        );
        return parsedMainSection as MainSection;
    }
}

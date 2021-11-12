import * as React from 'react';
import * as classNames from 'classnames';

import { ImgUpload } from '../../components/ImgUploader';
import { PlatformLinkTranslated, platformsTitle, Errors } from '../SlideEditorBehaviour';
import { Platform } from '../../apollo-query-types';
import { Textarea } from '../../../common/Textarea/TextArea';

interface Props {
    title: string;
    address: string;
    shortDescriptionForList: string;
    description: string;
    newImageUrl: string;
    platformLinks: PlatformLinkTranslated;
    changeImageUrl: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetImg: () => void;
    onChangeInput: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    editPodcastLinks: (e: React.FormEvent<HTMLInputElement>) => void;
    errors: Errors;
    isLoadingNewImageUrl: boolean;
    isNotCanChangeAddress: boolean;
    coverBackgroundColor: string;
}

const ROOT_CLASS = 'form-main';

export function FormMainTemplate({
    changeImageUrl,
    address,
    newImageUrl,
    description,
    shortDescriptionForList,
    title,
    resetImg,
    platformLinks,
    onChangeInput,
    editPodcastLinks,
    errors,
    isLoadingNewImageUrl,
    isNotCanChangeAddress,
    coverBackgroundColor,
}: Props) {
    const titleErrors = Object.values(errors.title)[0];
    const addressErrors = Object.values(errors.address)[0];
    const shortDescriptionForListErrors = Object.values(errors.shortDescriptionForList)[0];
    const descriptionErrors = Object.values(errors.description)[0];
    const currentImageUrlErrors = Object.values(errors.currentImageUrl)[0];
    const coverBackgroundColorErrors = Object.values(errors.coverBackgroundColor)[0];
    return (
        <div className={ROOT_CLASS}>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Название</p>
                <div className={`${ROOT_CLASS}__item-wrapper`}>
                    <input
                        className={classNames(`${ROOT_CLASS}__input`, {
                            [`${ROOT_CLASS}__input_error`]: titleErrors,
                        })}
                        type="text"
                        value={title}
                        name="title"
                        onChange={onChangeInput}
                        autoComplete="off"
                        placeholder="Обязательно для заполнения"
                    />
                    { titleErrors && (
                        <p className={`${ROOT_CLASS}__item-error`}>{titleErrors}</p>
                    )}
                </div>
            </div>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Адрес на сайте</p>
                <div className={`${ROOT_CLASS}__item-wrapper`}>
                    {isNotCanChangeAddress ? (
                        <div className={`${ROOT_CLASS}__address_disabled`}>
                            {`https://mel.fm/podcast/${address}`}
                        </div>
                    ) : (
                        <>
                            <div
                                className={classNames(`${ROOT_CLASS}__address`, {
                                    'form-main__address_error': addressErrors,
                                })}
                            >
                                <span className={`${ROOT_CLASS}__address-root`}>
                                    https://mel.fm/podcast/
                                </span>
                                <input
                                    className={`${ROOT_CLASS}__input-address`}
                                    type="text"
                                    value={address}
                                    name="address"
                                    onChange={onChangeInput}
                                    autoComplete="off"
                                />
                            </div>
                            { addressErrors && (
                                <p className={`${ROOT_CLASS}__item-error`}>
                                    {addressErrors}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Краткое описание</p>
                <div className={`${ROOT_CLASS}__item-wrapper`}>
                    <Textarea
                        className={classNames(`${ROOT_CLASS}__textarea`, {
                            'form-main__textarea_error': shortDescriptionForListErrors,
                        })}
                        value={shortDescriptionForList}
                        name="shortDescriptionForList"
                        onChange={onChangeInput}
                        autoHeight={true}
                        placeholder="Отображается на главной странице подкастов"
                    />
                    { shortDescriptionForListErrors && (
                        <p className={`${ROOT_CLASS}__item-error`}>
                            {shortDescriptionForListErrors}
                        </p>
                    )}
                </div>
            </div>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Описание</p>
                <div className={`${ROOT_CLASS}__item-wrapper`}>
                    <Textarea
                        className={classNames(`${ROOT_CLASS}__textarea`, {
                            [`${ROOT_CLASS}__textarea_error`]: descriptionErrors,
                        })}
                        value={description}
                        name="description"
                        onChange={onChangeInput}
                        autoHeight={true}
                        placeholder="Отображается на странице подкаста"
                    />
                    { descriptionErrors && (
                        <p className={`${ROOT_CLASS}__item-error`}>
                            {descriptionErrors}
                        </p>
                    )}
                </div>
            </div>
            <div/>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Цвет фона (#HEX)</p>
                <div className={`${ROOT_CLASS}__item-wrapper-color`}>
                    <input
                        className={classNames(`${ROOT_CLASS}__input`, {
                            [`${ROOT_CLASS}__input_error`]: coverBackgroundColorErrors,
                        })}
                        name="coverBackgroundColor"
                        onChange={onChangeInput}
                        type="text"
                        value={coverBackgroundColor}
                        autoComplete="off"
                    />
                    {coverBackgroundColorErrors && (
                        <p className={`${ROOT_CLASS}__item-error`}>
                            {coverBackgroundColorErrors}
                        </p>
                    )}
                </div>
            </div>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Обложка</p>
                <div className={`${ROOT_CLASS}__item-upload-img`}>
                    <ImgUpload
                        title={'285x285'}
                        subTitle="Retina 570x570"
                        imageUrl={newImageUrl}
                        changeImageUrl={changeImageUrl}
                        deleteImg={resetImg}
                        isLoading={isLoadingNewImageUrl}
                    />
                    { currentImageUrlErrors && (
                        <p className={`${ROOT_CLASS}__item-error`}>
                            {Object.values(errors.currentImageUrl).join(', ')}
                        </p>
                    )}
                </div>
            </div>
            <div className={`${ROOT_CLASS}__item`}>
                <p className={`${ROOT_CLASS}__item-title`}>Ссылки</p>
                <div className="list-links">
                    {/* tslint:disable-next-line:prefer-array-literal */}
                    {(Object.keys(platformsTitle) as Array<Platform>).map((platform) => {
                        const platformLinkErrors = errors.platformLinks[platform]
                            && Object.values(errors.platformLinks[platform])
                            .join(', ');
                        return (
                            <div className={`${ROOT_CLASS}__item`} key={platform}>
                                <p className={`${ROOT_CLASS}__item-title list-links__link-title`}>
                                    {platformsTitle[platform]}
                                </p>
                                <div className={`${ROOT_CLASS}__item-info list-links__link`}>
                                    <input
                                        className={classNames('list-links__link-input', {
                                            'list-links__link-input_error': platformLinkErrors,
                                        })}
                                        value={platformLinks.get(platform)!.link}
                                        name={platform}
                                        onChange={editPodcastLinks}
                                        type="text"
                                        placeholder="Укажите ссылку"
                                        autoComplete="off"
                                    />
                                    {
                                        platformLinkErrors && (
                                            <p className={`${ROOT_CLASS}__item-error`}>
                                                {platformLinkErrors}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

import * as React from 'react';
import { ValueType } from 'react-select/lib/types';

import { EpisodesListTemplate } from './EpisodesListTemplate';
import { UIEpisode, Errors } from '../SlideEditorBehaviour';

interface Props {
    currentSeasonCount: number;
    episodes: UIEpisode[];
    editEpisode: (changedEpisode: UIEpisode) => void;
    addEpisode: () => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
    changeCurrentSeasonCount: (lastSeason: number) => void;
    errors: Errors;
}

interface State {
    currentSelect: Option;
}

export interface Option {
    value: number | string;
    label: string | JSX.Element;
}

export class EpisodesListBehaviour extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        const { currentSeasonCount } = this.props;
        this.state = {
            currentSelect: currentSeasonCount !== 1
                ? { label: `Сезон ${currentSeasonCount}`, value: currentSeasonCount }
                : { label: 'Все сезоны', value: 'Все сезоны' },
        };
    }

    public changeCurrentSelect = (select : ValueType<Option>) => {
        const { changeCurrentSeasonCount } = this.props;
        const copySelect = select as Option;
        if (copySelect.value === 'add-season') {
            const { currentSeasonCount } = this.props;
            const newSeason = currentSeasonCount + 1;
            const newOption = {
                label: `Сезон ${newSeason}`,
                value: newSeason,
            };
            this.setState(({ currentSelect : newOption }));
            changeCurrentSeasonCount(newSeason);
        } else {
            this.setState({ currentSelect: copySelect });
        }
    }

    public deleteLastSeason = () => {
        const { changeCurrentSeasonCount, currentSeasonCount } = this.props;
        changeCurrentSeasonCount(currentSeasonCount - 1);
        this.setState({
            currentSelect : currentSeasonCount - 1 !== 1
                ? { label: `Сезон ${currentSeasonCount - 1}`, value: currentSeasonCount - 1 }
                : { label: 'Все сезоны', value: 'Все сезоны' },
        });
    }

    public render() {
        const { currentSelect } = this.state;
        const {
            editEpisode,
            addEpisode,
            deleteEpisode,
            currentSeasonCount,
            errors,
        } = this.props;
        const isVisibilityButtonNewSeason = Boolean(this.props.episodes
            .filter(episode => episode.season === currentSeasonCount).length);
        const isVisibilityDeleteLastSeason = !isVisibilityButtonNewSeason;
        return React.createElement(EpisodesListTemplate, {
            editEpisode,
            currentSelect,
            isVisibilityButtonNewSeason,
            isVisibilityDeleteLastSeason,
            addEpisode,
            deleteEpisode,
            currentSeasonCount,
            errors,
            options: this.createOptionsArray(currentSeasonCount),
            deleteLastSeason: this.deleteLastSeason,
            changeCurrentSelect: this.changeCurrentSelect,
            episodes: this.selectedEpisodes(),
        });
    }

    public createOptionsArray = (
        currentSeasonCount: number,
    ): Option[] => {
        return Array(currentSeasonCount).fill({}).map((_, index) => {
            const season = currentSeasonCount - index;
            return {
                label: `Сезон ${season}`,
                value: season,
                color: '#d8d8d8',
            };
        }).reverse();
    }

    private selectedEpisodes = () => {
        const { episodes } = this.props;
        const { currentSelect } = this.state;
        if (currentSelect.value === 'Все сезоны') {
            return episodes;
        }
        return episodes.filter(episode => episode.season === currentSelect.value);
    }
}

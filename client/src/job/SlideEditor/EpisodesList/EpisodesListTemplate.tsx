import * as React from 'react';
/* tslint:disable-next-line:import-name */
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';
import { StylesConfig } from 'react-select/lib/styles';

import { Option } from './EpisodesListBehaviour';
import { Episode } from '../Episode';
import { UIEpisode, Errors } from '../SlideEditorBehaviour';
import { SvgIcon } from '../../../common/SvgIcon';

interface EpisodesListTemplateProps {
    editEpisode: (changedEpisode: UIEpisode) => void;
    currentSelect: Option;
    options: Option[];
    episodes: UIEpisode[];
    currentSeasonCount: number;
    isVisibilityButtonNewSeason: boolean;
    isVisibilityDeleteLastSeason: boolean;
    changeCurrentSelect: (value: ValueType<Option>) => void;
    addEpisode: () => void;
    deleteLastSeason: () => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
    errors: Errors;
}

function AddSeasonButton() {
    return (
        <div
            className="add-season"
        >
            <SvgIcon
                relPath={'/admin/sprite.svg#add-podcast'}
                className="add-season__img"
            />
            <span className="add-season__text">
                Добавить сезон
            </span>
        </div>
    );
}

const buttonOption: Option = {
    label: <AddSeasonButton />,
    value: 'add-season',
};

const allEpisodesOption: Option = {
    value: 'Все сезоны',
    label: 'Все сезоны',
};

const customStyles: StylesConfig = {
    option: (provided, state): React.CSSProperties => ({
        ...provided,
        color: 'black',
        fontWeight: state.isSelected ? 700 : 400,
        cursor: 'pointer',
        padding: '15px 0px 15px 10px',
        fontSize: 14,
        backgroundColor: state.isFocused ? '#f2f2f2' : 'none',
    }),
    control: (provided): React.CSSProperties => ({
        ...provided,
        boxShadow: 'none',
        borderColor: '#BEBDBD',
    }),
};

interface FilterEpisodesProps {
    currentSelect: Option;
    options: Option[];
    currentSeasonCount: number;
    episodes: UIEpisode[];
    editEpisode: (changedEpisode: UIEpisode) => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
    deleteLastSeason: () => void;
    isVisibilityDeleteLastSeason: boolean;
    errors: Errors;
}

function FilterEpisodes({
    deleteEpisode,
    deleteLastSeason,
    currentSeasonCount,
    editEpisode,
    episodes,
    currentSelect,
    options,
    isVisibilityDeleteLastSeason,
    errors,
}: FilterEpisodesProps) {
    if (currentSelect.value === 'Все сезоны') {
        const allSeasons = [...options].reverse();
        const isNoSeasonality = allSeasons.length === 1;
        return (
            <div>
                {allSeasons.map(({ value: season }) => {
                    const episodesSeason = episodes.filter(episode => season === episode.season);
                    return (
                        <div key={season} className={'episodes__list-item'}>
                            {!isNoSeasonality && (
                                <h1>{season} Сезон</h1>
                            )}
                            {episodesSeason.length
                                ? episodesSeason.map(episode => (
                                     <Episode
                                         episode={episode}
                                         key={episode.publicationId}
                                         editEpisode={editEpisode}
                                         deleteEpisode={deleteEpisode}
                                         errors={errors}
                                     />
                                 ),
                                    )
                                : (
                                    <div className={'episodes__no-episodes'}>
                                        <p className={'episodes__no-episodes-title'}>
                                            Нет выпусков
                                        </p>
                                        {(season !== 1
                                            && currentSeasonCount === season
                                            && isVisibilityDeleteLastSeason)
                                            ? (
                                                <div
                                                    className="delete-season"
                                                    onClick={deleteLastSeason}
                                                >
                                                    <SvgIcon
                                                        relPath={'/admin/sprite.svg#delete-episode'}
                                                        className="delete-season__img"
                                                    />
                                                    <span className="delete-season__text">
                                                        Удалить сезон
                                                    </span>
                                                </div>
                                            ) : false
                                        }
                                    </div>
                                )
                            }
                        </div>
                    );
                })}
            </div>
        );
    }
    const isNotEmptySeason = episodes.length;
    return (
        <div className={'episodes__list-item'}>
            {isNotEmptySeason ? (
                episodes.map(episode => (
                            <Episode
                                episode={episode}
                                key={episode.publicationId}
                                editEpisode={editEpisode}
                                deleteEpisode={deleteEpisode}
                                errors={errors}
                            />
                ))) : (
                    <div className={'episodes__no-episodes'}>
                        <p className={'episodes__no-episodes-title'}>
                            Нет выпусков
                        </p>
                        {(currentSeasonCount === currentSelect.value
                            && isVisibilityDeleteLastSeason)
                            ? (
                                <div
                                    className="delete-season"
                                    onClick={deleteLastSeason}
                                >
                                    <SvgIcon
                                        relPath={'/admin/sprite.svg#delete-episode'}
                                        className="delete-season__img"
                                    />
                                    <span className="delete-season__text">
                                        Удалить сезон
                                    </span>
                                </div>
                            ) : false
                        }
                    </div>
                )}
        </div>
    );
}

export function EpisodesListTemplate({
    currentSelect,
    changeCurrentSelect,
    episodes,
    options,
    currentSeasonCount,
    isVisibilityButtonNewSeason,
    isVisibilityDeleteLastSeason,
    editEpisode,
    addEpisode,
    deleteEpisode,
    deleteLastSeason,
    errors,
}: EpisodesListTemplateProps) {
    const optionsSelect = options.length === 1 ? [] : options;
    return (
        <div className="episodes">
            <div className="episodes__dropdown">
                <Select
                    value={currentSelect}
                    onChange={changeCurrentSelect}
                    options={isVisibilityButtonNewSeason
                        ? [allEpisodesOption, ...optionsSelect, buttonOption]
                        : [allEpisodesOption, ...optionsSelect]
                    }
                    instanceId={1}
                    styles={customStyles}
                    theme={theme => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: 'none',
                        },
                    })}
                />
            </div>
            {
                (currentSelect.value === currentSeasonCount || currentSelect.value === 'Все сезоны')
                && (
                    <div
                        className="add-episode"
                        onClick={addEpisode}
                    >
                        <SvgIcon
                            relPath={'/admin/sprite.svg#add-podcast'}
                            className="add-episode__img"
                        />
                        <span className="add-episode__text">
                                Добавить выпуск
                            </span>
                    </div>
                )
            }
            <div className={'episodes__list'}>
                <FilterEpisodes
                    episodes={episodes}
                    options={options}
                    currentSelect={currentSelect}
                    editEpisode={editEpisode}
                    deleteEpisode={deleteEpisode}
                    currentSeasonCount={currentSeasonCount}
                    deleteLastSeason={deleteLastSeason}
                    isVisibilityDeleteLastSeason={isVisibilityDeleteLastSeason}
                    errors={errors}
                />
            </div>
        </div>
    );
}

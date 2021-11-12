import * as React from 'react';
import * as classNames from 'classnames';
import { Helmet } from 'react-helmet';

/* import { FormMain } from './MainForm'; */
import { ActiveTab, EditionPodcastState, UIEpisode } from './SlideEditorBehaviour';
import { LayoutRenderComponentProps } from '../routes';
import { EpisodesList } from './EpisodesList';

interface Props extends EditionPodcastState{
    toggleTab: (tab: ActiveTab) => void;
    changeImageUrl: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetImg: () => void;
    editEpisode: (changedEpisode: UIEpisode) => void;
    layoutRenderComponent: React.ComponentType<LayoutRenderComponentProps>;
    addEpisode: () => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
    changeCurrentSeasonCount: (lastSeason: number) => void;
    onChangeInput: (e: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>) => void;
    editPodcastLinks: (e: React.FormEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    isPageCreatePodcast: boolean;
    isNotCanChangeAddress: boolean;
}

export function SlideEditorTemplate({
    layoutRenderComponent: LayoutRenderComponent,
    activeTab,
    toggleTab,
    /* changeImageUrl, */
    title,
  /*   address,
    shortDescriptionForList,
    platformLinks,
    description,
    newImageUrl, */
    errors,
  /*   resetImg, */
    currentSeasonCount,
    episodes,
    editEpisode,
    addEpisode,
    deleteEpisode,
    changeCurrentSeasonCount,
    /* onChangeInput,
    editPodcastLinks, */
    handleSubmit,
    isLoadingNewImageUrl,
    hasUnsavedChanges,
    isPageCreatePodcast,
    /* isNotCanChangeAddress,
    coverBackgroundColor, */
}: Props) {
    return (
        <LayoutRenderComponent>
            <Helmet>
                <title>Редактирование подкаста {title}</title>
            </Helmet>
                <div className="editionPodcast podcasts-list">
                    <h1 className="editionPodcast__title">
                        {isPageCreatePodcast ? 'hui' : `${title}`}
                    </h1>
                    <div className="editionPodcast__main">
                        <div className="tabs">
                            <div
                                className={classNames(
                                    'tabs__item',
                                    { active: activeTab === 'episodes' },
                                )}
                                onClick={() => toggleTab('episodes')}
                            >
                                slide
                            </div>
                            <div
                                className={classNames('tabs__item', {
                                    active: activeTab === 'main',
                                })}
                                onClick={() => toggleTab('main')}
                            >
                                Подкаст
                            </div>
                        </div>
                        <div className="tab-content">
                            { activeTab === 'main'
                                ?  (
                                  /*   <FormMain
                                        title={title}
                                        address={address}
                                        description={description}
                                        shortDescriptionForList={shortDescriptionForList}
                                        newImageUrl={newImageUrl}
                                        platformLinks={platformLinks}
                                        errors={errors}
                                        changeImageUrl={changeImageUrl}
                                        resetImg={resetImg}
                                        onChangeInput={onChangeInput}
                                        editPodcastLinks={editPodcastLinks}
                                        isLoadingNewImageUrl={isLoadingNewImageUrl}
                                        isNotCanChangeAddress={isNotCanChangeAddress}
                                        coverBackgroundColor={coverBackgroundColor}
                                    /> */
                                    <div>hui</div>
                                )
                                : (
                                    <EpisodesList
                                        currentSeasonCount={currentSeasonCount}
                                        episodes={episodes}
                                        editEpisode={editEpisode}
                                        addEpisode={addEpisode}
                                        deleteEpisode={deleteEpisode}
                                        changeCurrentSeasonCount={changeCurrentSeasonCount}
                                        errors={errors}
                                    />
                                )
                            }
                        </div>
                        <div className={'editionPodcast__control-panel control-panel'}>
                            <button
                                className={classNames('control-panel__save', {
                                    'control-panel__save_disabled': !hasUnsavedChanges
                                        || isLoadingNewImageUrl,
                                })}
                                onClick={handleSubmit}
                                disabled={!hasUnsavedChanges || isLoadingNewImageUrl}
                            >
                                {isPageCreatePodcast ?  'Создать' : 'Сохранить'}
                            </button>
                        </div>
                    </div>
                </div>
        </LayoutRenderComponent>
    );
}

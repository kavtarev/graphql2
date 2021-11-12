import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import * as classNames from 'classnames';

import { Podcast } from './Podcast';
import { LayoutRenderComponentProps } from '../routes';
import { Drag, Podcasts } from './SlidesListBehaviour';
import { SvgIcon } from '../../common/SvgIcon';

interface Props {
    podcasts: Podcasts[] ;
    layoutRenderComponent: React.ComponentType<LayoutRenderComponentProps>;
    dragPodcast: (id: number, drag: Drag) => void;
    hasUnsavedChanges: boolean;
    saveOrderPodcasts: () => void;
}

const ROOT_CLASS = 'podcasts-list';

export function SlidesListTemplate({
    podcasts,
    layoutRenderComponent: LayoutRenderComponent,
    dragPodcast,
    hasUnsavedChanges,
    saveOrderPodcasts,
}: Props) {
    return (
        <LayoutRenderComponent>
            <Helmet>
                <title>Подкасты</title>
            </Helmet>
                <div className={ROOT_CLASS}>
                    <h1 className={`${ROOT_CLASS}__title`}>Slides</h1>
                    <div className={`${ROOT_CLASS}__list`}>
                        {podcasts.map(({ id, title, coverImageUrl }, index) => (
                            <Podcast
                                key={id}
                                id={id}
                                title={title}
                                coverImageUrl={coverImageUrl}
                                index={index}
                                dragPodcast={dragPodcast}
                                lastIndex={podcasts.length - 1}
                            />
                        ))}
                        <NavLink
                            to="new-slide"
                            className={`${ROOT_CLASS}__add-podcast add-podcast-button`}
                        >
                            <SvgIcon
                                relPath={'/admin/sprite.svg#add-podcast'}
                                className="add-podcast-button__img"
                            />
                            <span className="add-podcast-button__text">
                                Добавить подкаст
                            </span>
                        </NavLink>
                        <button
                            className={classNames('save-order-podcasts', {
                                'save-order-podcasts_active': hasUnsavedChanges,
                            })}
                            disabled={!hasUnsavedChanges}
                            onClick={saveOrderPodcasts}
                        >
                            Сохранить порядок подкастов
                        </button>
                    </div>
                </div>
        </LayoutRenderComponent>
    );
}

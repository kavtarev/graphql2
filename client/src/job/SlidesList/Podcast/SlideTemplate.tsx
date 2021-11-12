import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Drag } from '../SlidesListBehaviour';
import { Icon } from '../../../../../frontend/admin/react.blocks/icon/icon';

interface Props {
    id: number;
    coverImageUrl: string;
    title: string;
    dragPodcast: (id: number, drag: Drag) => void;
    index: number;
    lastIndex: number;
}

export function PodcastTemplate({
    id,
    coverImageUrl,
    title,
    index,
    dragPodcast,
    lastIndex,
}: Props) {
    return (
        <div className="podcast">
            <div className="podcast__move">
                { index !== 0 && (
                    <div className="podcast__move-up" onClick={() => dragPodcast(id, 'up')}>
                        <Icon type={'drag-up'} />
                    </div>
                )}
                { index !== lastIndex && (
                    <div className="podcast__move-down" onClick={() => dragPodcast(id, 'down')}>
                        <Icon type={'drag-down'} />
                    </div>
                )}
            </div>
            <div className="podcast__info">
                <NavLink to={`podcast/${id}`}>
                    <img className={'podcast__info-cover'} src={coverImageUrl} alt="logo"/>
                </NavLink>
                <NavLink className={'podcast__info-title'} to={`podcast/${id}`}>
                    <span>{title}</span>
                </NavLink>
            </div>
            <button>delete slide</button>
        </div>
    );
}

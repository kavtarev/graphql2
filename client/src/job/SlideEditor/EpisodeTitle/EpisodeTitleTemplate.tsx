import * as React from 'react';
import Popup from 'reactjs-popup'; // tslint:disable-line

import { UIEpisode } from '../SlideEditorBehaviour';

interface Props {
    episode: UIEpisode;
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    editEpisode: (changedEpisode: UIEpisode) => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
}

export function EpisodeTitleTemplate({
    episode,
    editEpisode,
    deleteEpisode,
}: Props) {
    return (
        <div className={'episode-title-container'}>
            <div className={'episode-title'}>
                <p className={'episode-title__text'}>
                {episode.title}
                </p>
                <Popup
                    position="bottom right"
                    on={'click'}
                    trigger={
                        <div className={'episode-title__icon-edit'} />
                    }
                >
                    <div className={'episode-title__action-panel'}>
                        <p
                            className={'episode-title__action-panel-text'}
                            onClick={() => editEpisode({ ...episode, isEditing: true })}
                        >
                            Редактировать выпуск
                        </p>
                        <p
                            className={'episode-title__action-panel-text'}
                            onClick={() => deleteEpisode(episode)}
                        >
                            Удалить выпуск
                        </p>
                    </div>
                </Popup>
            </div>
        </div>
    );
}

import * as React from 'react';
import * as classNames from 'classnames';

import { UIEpisode } from '../SlideEditorBehaviour';
import { Textarea } from '../../../common/Textarea/TextArea';
import { SvgIcon } from '../../../common/SvgIcon';

interface Props {
    episode: UIEpisode;
    onChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errorsTitle?: string;
    errorsLink?: string;
    deleteEpisode: () => void;
}

export function EpisodeFormTemplate({
    episode,
    onChange,
    errorsLink,
    errorsTitle,
    deleteEpisode,
}: Props) {
    return (
        <div className={'EditFormEpisode'}>
            <div className={'EditFormEpisode__info'}>
                <p className={'EditFormEpisode__info-title'}>Название</p>
                <div className={'EditFormEpisode__info-wrapper'}>
                    <Textarea
                        className={classNames('EditFormEpisode__info-textarea', {
                            'EditFormEpisode__info-value_error': errorsTitle,
                        })}
                        autoHeight={true}
                        name={'name'}
                        value={episode.title}
                        onChange={onChange}
                        placeholder="Укажите название эпизода"
                    />
                        { errorsTitle && (
                            <p
                                className={'EditFormEpisode__errors'}
                            >
                                {errorsTitle}
                            </p>
                        )}
                </div>
            </div>
            <div className={'EditFormEpisode__info '}>
                <p className={'EditFormEpisode__info-title'}>Ссылка</p>
                <div className={'EditFormEpisode__info-wrapper'}>
                    <input
                        className={classNames('EditFormEpisode__info-input', {
                            'EditFormEpisode__info-value_error': errorsLink,
                        })}
                        type="text"
                        name={'url'}
                        value={episode.url}
                        autoComplete={'off'}
                        onChange={onChange}
                        placeholder="Укажите ссылку на публикацию"
                    />
                    { errorsLink && (
                        <p
                            className={'EditFormEpisode__errors'}
                        >
                            {errorsLink}
                        </p>
                    )}
                </div>
            </div>
            <div
                className="EditFormEpisode__delete"
                onClick={deleteEpisode}
            >
                <SvgIcon
                    relPath={'/admin/sprite.svg#delete-episode'}
                    className="EditFormEpisode__delete-img"
                />
                <span className="EditFormEpisode__delete-text">
                    Удалить выпуск
                </span>
            </div>
        </div>
    );
}

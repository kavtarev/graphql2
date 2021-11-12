import * as React from 'react';

import { EpisodeForm } from '../EpisodeForm';
import { EpisodeTitle } from '../EpisodeTitle';
import { UIEpisode, Errors } from '../SlideEditorBehaviour';

interface Props {
    episode: UIEpisode;
    editEpisode: (changedEpisode: UIEpisode) => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
    errors: Errors;
}

export function EpisodeTemplate({
    episode,
    editEpisode,
    deleteEpisode,
    errors,
}: Props) {
    return (
        <div className={'episode'}>
        {episode.isEditing
                ? (
                    <EpisodeForm
                        episode={episode}
                        editEpisode={editEpisode}
                        deleteEpisode={deleteEpisode}
                        errors={errors}
                    />
                )
                : (
                    <EpisodeTitle
                        episode={episode}
                        editEpisode={editEpisode}
                        deleteEpisode={deleteEpisode}
                    />
                )
        }
        </div>
    );
}

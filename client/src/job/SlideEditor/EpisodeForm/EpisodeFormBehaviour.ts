import * as React from 'react';

import { EpisodeFormTemplate } from './EpisodeFormTemplate';
import { UIEpisode, Errors } from '../SlideEditorBehaviour';

interface Props {
    episode: UIEpisode;
    editEpisode: (changedEpisode: UIEpisode) => void;
    errors: Errors;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
}

export class EpisodeFormBehaviour extends React.Component<Props, any>{
    public onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.currentTarget;
        const { episode, editEpisode } = this.props;
        const changedEpisode = { ...episode };
        if (name === 'name') {
            changedEpisode.title =  value;
        }
        if (name === 'url') {
            changedEpisode.url = value;
        }
        editEpisode(changedEpisode);
    }

    public deleteEpisode = () => {
        const { deleteEpisode, episode } = this.props;
        deleteEpisode(episode);
    }

    public render() {
        const { episode, errors: { episodes } } = this.props;
        const errorsEpisode = episodes[episode.id];
        const errorsTitle = errorsEpisode?.title &&
            Object.values(errorsEpisode.title)[0];
        const errorsLink = errorsEpisode?.url &&
            Object.values(errorsEpisode.url)[0];
        return React.createElement(EpisodeFormTemplate, {
            episode,
            errorsTitle,
            errorsLink,
            deleteEpisode: this.deleteEpisode,
            onChange: this.onChange,
        });
    }
}

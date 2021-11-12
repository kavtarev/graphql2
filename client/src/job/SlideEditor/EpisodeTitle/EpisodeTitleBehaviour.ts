import * as React from 'react';

import { EpisodeTitleTemplate } from './EpisodeTitleTemplate';
import { UIEpisode } from '../SlideEditorBehaviour';

interface State {
    isOpenModal: boolean;
}

interface Props {
    episode: UIEpisode;
    editEpisode: (changedEpisode: UIEpisode) => void;
    deleteEpisode: (deleteEpisode: UIEpisode) => void;
}

export class EpisodeTitleBehaviour extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpenModal: false,
        };
    }
    public openModal = () => {
        this.setState({ isOpenModal: true });
    }
    public closeModal = () => {
        this.setState({ isOpenModal: false });
    }
    public render() {
        const { episode, editEpisode, deleteEpisode } = this.props;
        const { isOpenModal } = this.state;
        return React.createElement(EpisodeTitleTemplate, {
            episode,
            isOpenModal,
            editEpisode,
            deleteEpisode,
            openModal: this.openModal,
            closeModal: this.closeModal,
        });
    }
}

import * as React from 'react';
import { MutationFunction } from 'react-apollo';
import { ApolloError } from 'apollo-client';

import { LayoutRenderComponentProps } from '../routes';
import {
    PodcastsMutation,
    PodcastsMutationVariables,
    PodcastsQuery,
    PodcastsQuery_podcasts,
} from '../apollo-query-types';
import { DeepOmit } from '../../common/DeepOmit';
import { SlidesListTemplate } from './SlidesListTemplate';

interface Props {
    layoutRenderComponent: React.ComponentType<LayoutRenderComponentProps>;
    podcastsQuery: PodcastsQuery ;
    reorderPodcasts: MutationFunction<PodcastsMutation, PodcastsMutationVariables>;
}

export type Drag = 'up' | 'down';

export type Podcasts = DeepOmit<PodcastsQuery_podcasts, '__typename'>;

interface State {
    podcasts: Podcasts[];
    hasUnsavedChanges: boolean;
}

export class SlidesListBehaviour extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const { podcasts } = this.props.podcastsQuery;

        this.state = {
            podcasts: podcasts
                .map(({ __typename, ...podcast }) => podcast),
            hasUnsavedChanges: false,
        };
    }

    public render() {
        const { layoutRenderComponent } = this.props;
        const { podcasts, hasUnsavedChanges } = this.state;

        return React.createElement(SlidesListTemplate, {
            layoutRenderComponent,
            podcasts,
            hasUnsavedChanges,
            dragPodcast: this.dragPodcast,
            saveOrderPodcasts: this.saveOrderPodcasts,
        });

    }

    public dragPodcast = (id: number, drag: Drag) => {
        const { podcasts } = this.state;
        const podcastIndex = podcasts.findIndex(podcast => podcast.id === id);
        const newListPodcasts: Podcasts[] = [...podcasts];
        if (drag === 'up') {
            newListPodcasts.splice(
                podcastIndex - 1,
                2,
                podcasts[podcastIndex],
                podcasts[podcastIndex - 1],
            );
        } else {
            newListPodcasts.splice(
                podcastIndex,
                2,
                podcasts[podcastIndex + 1],
                podcasts[podcastIndex],
            );
        }
        this.setState({ podcasts: newListPodcasts, hasUnsavedChanges: true });
    }

    public saveOrderPodcasts = async () => {
        const { reorderPodcasts } = this.props;
        const { podcasts } = this.state;
        try {
            const podcastsId = podcasts.map(podcast =>  podcast.id);
            await reorderPodcasts({ variables : { podcasts: { ids : podcastsId } } });
            this.setState({ hasUnsavedChanges: false });
        } catch (error)  {
            throw new ApolloError(error);
        }
    }
}

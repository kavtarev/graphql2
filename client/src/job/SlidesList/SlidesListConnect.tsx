import * as React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import { PodcastsQuery, PodcastsMutation, PodcastsMutationVariables } from '../apollo-query-types';
import { PageComponentProps } from '../routes';
import { SvgIcon } from '../../common/SvgIcon';
import { Error } from '../Error';
import { SlidesListBehaviour } from './SlidesListBehaviour';

export const PODCASTS = gql`
    query PodcastsQuery {
        podcasts {
            id,
            coverImageUrl,
            title,
        }
    }
`;

const MUTATION = gql`
    mutation PodcastsMutation($podcasts: OrderPodcasts!) {
        reorderPodcasts(podcasts: $podcasts)
    }
`;

export function SlidesListConnect({
    layoutRenderComponent: LayoutRenderComponent,
}: PageComponentProps<{ id: string }>) {
    return (
        <Query<PodcastsQuery>
            query={PODCASTS}
        >
            {({ data, loading }) => {
                if (data?.podcasts) {
                    return (
                        <Mutation<PodcastsMutation, PodcastsMutationVariables>
                            mutation={MUTATION}
                            refetchQueries={[{ query: PODCASTS }]}
                        >
                            {reorderPodcasts => (
                                <SlidesListBehaviour
                                    podcastsQuery={data}
                                    layoutRenderComponent={LayoutRenderComponent}
                                    reorderPodcasts={reorderPodcasts}
                                />
                            )}
                        </Mutation>
                    );
                }
                return (
                    <>
                        { loading
                            ? (
                                <LayoutRenderComponent>
                                    <div
                                        className="loader-podcast-list"
                                    >
                                        <SvgIcon
                                            relPath={'/admin/sprite.svg#spinner-big'}
                                            className="loader-podcast-list__spinner-icon"
                                        />
                                    </div>
                                </LayoutRenderComponent>
                            ) : (
                                <Error
                                    title={'Произошла ошибка'}
                                    subtitle={'Попробуйте зайти позже'}
                                />
                            )
                        }
                    </>
                );

            }}
        </Query>
    );
}

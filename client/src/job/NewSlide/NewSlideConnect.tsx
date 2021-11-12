import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';

import { PageComponentProps } from '../routes';
import { UrlComposer } from '../../common/UrlComposer';
import { SlideEditorBehaviour } from '../SlideEditor/SlideEditorBehaviour';
import {
    CreatePodcastMutationAdmin,
    CreatePodcastMutationAdminVariables,
    CreatePodcastQueryAdmin,
} from '../apollo-query-types';
import { PODCASTS } from '../PodcastList/PodcastListConnect';
import { SvgIcon } from '../../common/SvgIcon';
import { Error } from '../Error';

const QUERY = gql`
    query CreatePodcastQueryAdmin {
        systemConfig {
            mainHost
        }
    }
`;

const mutationPodcast = gql`
    mutation CreatePodcastMutationAdmin($podcast: NewPodcast!) {
        createPodcast(podcast: $podcast) {
            podcast {
                id
            }
        }
    }
`;

export function NewSlideConnect({
    layoutRenderComponent: LayoutRenderComponent,
    history,
}: PageComponentProps<{}>) {
    return (
        <Query<CreatePodcastQueryAdmin>
            query={QUERY}
        >
            {({ data, loading }) => {
                if (data?.systemConfig) {
                    return (
                        <UrlComposer>
                            {urlComposer => (
                                <Mutation<
                                        CreatePodcastMutationAdmin,
                                        CreatePodcastMutationAdminVariables
                                    >
                                    mutation={mutationPodcast}
                                    refetchQueries={[{ query: PODCASTS }]}
                                    awaitRefetchQueries={true}
                                >
                                    {createPodcast => (
                                        <SlideEditorBehaviour
                                            layoutRenderComponent={LayoutRenderComponent}
                                            urlComposer={urlComposer}
                                            createPodcast={createPodcast}
                                            history={history}
                                            systemConfig={data.systemConfig}
                                        />
                                    )}
                                </Mutation>
                            )}
                        </UrlComposer>
                    );
                }
                return (
                    <>
                        { loading
                            ? (
                                <LayoutRenderComponent>
                                    <div
                                        className="loader-podcast"
                                    >
                                        <SvgIcon
                                            relPath={'/admin/sprite.svg#spinner-big'}
                                            className="loader-podcast__spinner-icon"
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

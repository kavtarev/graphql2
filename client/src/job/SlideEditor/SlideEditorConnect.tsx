import * as React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import { SlideEditorBehaviour } from './SlideEditorBehaviour';
import {
    PodcastMutationAdmin,
    PodcastMutationAdminVariables,
    PodcastQueryAdmin, PodcastQueryAdminVariables,
} from '../apollo-query-types';
import { PageComponentProps } from '../routes';
import { UrlComposer } from '../../common/UrlComposer';
import { Error } from '../Error';
import { PODCASTS } from '../PodcastList/PodcastListConnect';
import { SvgIcon } from '../../common/SvgIcon';

const PODCAST = gql`
    query PodcastQueryAdmin($id: Int!) {
        getPodcastById(id: $id) {
            id
            title
            address
            shortDescriptionForList
            description
            coverImageUrl
            coverBackgroundColor
            currentSeasonCount
            episodes {
                id
                title
                publicationId
                season
                address {
                    id
                    title
                }
                mainSection {
                    sectionId
                    sectionAddress
                    sectionName
                    subsectionId
                    subsectionAddress
                    subsectionName
                    isShowInMenu
                }
            }
            platformLinks {
                platform
                link
            }
        }
        systemConfig {
            mainHost
        }
    }
`;

const mutationPodcast = gql`
    mutation PodcastMutationAdmin($podcast: UpdatePodcast!) {
        updatePodcast(podcast: $podcast)
    }
`;

export function SlideEditorConnect({
    match,
    history,
    layoutRenderComponent: LayoutRenderComponent,
}: PageComponentProps<{ id: string }>) {
    const id = Number(match.params.id);
    return (
        <Query<PodcastQueryAdmin, PodcastQueryAdminVariables>
            query={PODCAST}
            variables={{ id }}
        >
            {({ data, loading }) => {
                return data?.getPodcastById ? (
                    <UrlComposer>
                        {urlComposer => (
                            <Mutation<PodcastMutationAdmin, PodcastMutationAdminVariables>
                                mutation={mutationPodcast}
                                refetchQueries={[
                                    { query: PODCASTS },
                                    { query: PODCAST, variables: { id } },
                                ]}
                                awaitRefetchQueries={true}
                            >
                                {updatePodcast => (
                                    <SlideEditorBehaviour
                                        podcastQueryAdmin={data.getPodcastById}
                                        layoutRenderComponent={LayoutRenderComponent}
                                        urlComposer={urlComposer}
                                        systemConfig={data.systemConfig}
                                        updatePodcast={updatePodcast}
                                        history={history}
                                    />
                                )}
                            </Mutation>
                        )}
                    </UrlComposer>
                ) : (
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

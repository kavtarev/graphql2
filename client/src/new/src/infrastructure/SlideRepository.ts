import { di } from '@melmedia/node-ts-framework';
import { provide } from 'inversify-binding-decorators';
import { Repository } from 'typeorm';
/* tslint:disable-next-line:import-name */

import { Type } from '../Type';
import * as models from './models';

@provide(Type.SlideRepository)
export class SlideRepository {
  @di.inject(Type.SlideRepository)
  protected readonly slideDataRepository!: Repository<models.Slide>;

  public async list() {
    return this.slideDataRepository.createQueryBuilder('podcast')
      .leftJoin('podcast.episodes', 'episode')
      .addSelect('max(episode.publicationTime)', 'newestEpisodePublicationTime')
      .addSelect('count(episode.id)', 'episodeCount')
      .groupBy('podcast.id')
      .orderBy('podcast.listPosition', 'ASC')
      .getRawMany();
  }

  public async change(slide:any) {
    return this.slideDataRepository.save({ slide, id:1 });
  }

}

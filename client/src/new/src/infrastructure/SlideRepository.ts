import { di } from '@melmedia/node-ts-framework'
import { provide } from 'inversify-binding-decorators'
import { Repository } from 'typeorm'
/* tslint:disable-next-line:import-name */

import { Type } from '../Type'
import * as models from './models'

@provide(Type.SlideRepository)
export class SlideRepository {
    @di.inject(Type.SlideRepository)
    protected readonly slideDataRepository!: Repository<models.Slide>

    public async list() {
        return this.slideDataRepository.find()
    }

    public async change(main: models.Slide) {
        const slide = main.slide
        return this.slideDataRepository.save({ slide, id: 1, updateTime: Date.now() })
    }
}

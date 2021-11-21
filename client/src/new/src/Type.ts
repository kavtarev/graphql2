import { di } from '@melmedia/node-ts-framework'

export const Type = {
    ...di.Type,
    SlideRepository: Symbol('SlideRepository'),
    SlideDataRepository: Symbol('SlideDataRepository'),
}

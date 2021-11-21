import {
    BodyParam,
    Get,
    HttpCode,
    JsonController,
    NotFoundError,
    OnUndefined,
    Param,
    Body,
    Put,
    Post,
    QueryParam,
    Res,
} from 'routing-controllers'
import { plainToClass, plainToClassFromExist } from 'class-transformer'
import { Response } from 'express'
import { Repository } from 'typeorm'
import { di, rejectNanParam, ReturnSpecification } from '@melmedia/node-ts-framework'
import { queryIdArray } from '@melmedia/rest-client'

import * as forms from '../forms'
import * as models from '../../infrastructure/models'
import { MainView } from '../views/MainView'
import { Type } from '../../Type'
import { SlideRepository } from '../../infrastructure/SlideRepository'

@JsonController('/slide')
export class SlideController {
    @di.inject(Type.SlideRepository)
    protected slideRepository!: SlideRepository

    /**
     * @apiDefine GetSlide

     * @apiSuccess {Object[]} .slide
     * @apiSuccess {String} .slide.text
     * @apiSuccess {String} .slide.textColor
     * @apiSuccess {String} .slide.textPosition
     * @apiSuccess {String} .slide.buttonColor
     * @apiSuccess {String} .slide.buttonColor
     * @apiSuccess {String} .slide.smallScreenImageUrl
     * @apiSuccess {String} .slide.largeScreenImageUrl
     */

    /* tslint:disable:max-line-length */
    /**
     * @api {POST} /main Create main
     * @apiName Change
     * @apiGroup Main
     * @apiVersion 1.0.0
     *
     * @apiParam {Object} main
     * @apiParam {String} .firstName
     * @apiParam {String} .lastName
     * @apiParam {String} .email
     * @apiParam {Boolean} [.isDraft]
     *
     * @apiSuccess (201) {String} Location HTTP header with url for created resource
     * @apiSuccess (201) {Object} main
     * @apiSuccess (201) {String} main.id ID of created entity
     *
     * @apiError (400) {String} code BadRequest
     *
     * @apiExample {curl} Example:
     *   curl -v -X POST -H "Content-Type: application/json" --data-binary '[{"slide":{"text":"Ivan","textColor":"Ivanov","textPosition":"test@example.com","buttonText":"test@example.com","buttonColor":"test@example.com","smallScreenImageUrl":"test@example.com","largeScreenImageUrl":"test@example.com",}}]' http://0.0.0.0:3000/slide
     */

    /* tslint:enable:max-line-length */
    @Post('/')
    @HttpCode(201)
    public async create(@BodyParam('slide', { required: true }) slideForm: forms.SlideForm) {
        const main = plainToClass(models.Slide, slideForm)
        /*  main.updateTime = new Date() */
        await this.slideRepository.change(main)
        return {}
    }

    /* tslint:disable:max-line-length */
    /**
     * @api {GET} /main List mains
     * @apiName List
     * @apiGroup Main
     * @apiVersion 1.0.0
     *
     * @apiParam {Boolean} [isDraft] Filter by isDraft
     * @apiParam {String} [id] filter list by IDs (comma-separated: 1,2,3)
     *
     * @apiSuccess {Object[]} mains
     * @apiSuccess {String} .firstName
     * @apiSuccess {String} .lastName
     * @apiSuccess {String} .email
     * @apiSuccess {Boolean} [.isDraft]
     *
     * @apiError (400) {String} code BadRequest
     *
     * @apiExample {curl} Example:
     *   curl -v http://0.0.0.0:3000/slide
     */

    /* tslint:enable:max-line-length */
    @Get('/')
    public async list() {
        const slide = await this.slideRepository.list()
        return { slide }
    }
}

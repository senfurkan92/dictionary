import { PrismaClient } from '@prisma/client'
import { IWord, IResultDataModel, IResultModel } from '../models/entities'
import { IRepo } from './repo'

interface Include {
    meanings?: boolean
}

interface OrderBy {
    id?: 'asc' | 'desc',
    createDate?: 'asc' | 'desc',
    updateDate?: 'asc' | 'desc',
    isDeleted?: 'asc' | 'desc',
    content?: 'asc' | 'desc',
    prononciation?: 'asc' | 'desc',
    record?: 'asc' | 'desc',
}

export class WordRepo implements IRepo<IWord> {
    prisma : PrismaClient
    
    constructor() {
        this.prisma = new PrismaClient()
    }
    
    insert(model: IWord): Promise<IResultDataModel<IWord>> {
        return this.prisma.word.create({
            data: {
                content: model.content,
                prononciation: model.prononciation
            }
        }).then(x => ({
            success: true,
            data: x,
        } as IResultDataModel<IWord> ))
        .catch(err => ({
            success: false,
            message: JSON.stringify(err)
        } as IResultDataModel<IWord> ))
    }
    
    update(model: IWord): Promise<IResultDataModel<IWord>> {
        return this.prisma.word.update({
            data: {
                content: model.content,
                prononciation: model.prononciation,
                record: model.record,
            },
            where: {
                id: model.id
            }
        }).then(x => ({
            success: true,
            data: x,
        } as IResultDataModel<IWord> ))
        .catch(err => ({
            success: false,
            message: JSON.stringify(err)
        } as IResultDataModel<IWord> ))
    }
    
    delete(id: string): Promise<IResultModel> {
        return this.prisma.word.delete({
            where: {
                id: id,
            }
        }).then(x => ({
            success: true,
        } as IResultModel))
        .catch(err => ({
            success: false,
            message: JSON.stringify(err)
        } as IResultModel ))
    }

    getById(id: string, include: Include): Promise<IResultDataModel<IWord>> {
        return this.prisma.word.findUnique({
            where: {
                id
            },
            include: include
        }).then(x => ({
            success: true,
            data: x,
        } as IResultDataModel<IWord> ))
        .catch(err => ({
            success: false,
            message: JSON.stringify(err)
        } as IResultDataModel<IWord> ))
    }

    get(where: any, include: Include, orderBy: OrderBy): Promise<IResultDataModel<IWord>> {
        return this.prisma.word.findFirst({
            where: where,
            include: include,
            orderBy: orderBy
        }).then(x => ({
            success: true,
            data: x,
        } as IResultDataModel<IWord> ))
        .catch(err => ({
            success: false,
            message: JSON.stringify(err)
        } as IResultDataModel<IWord> ))
    }

    getList(where: any, include: Include, orderBy: OrderBy, skip: number, take: number): Promise<IResultDataModel<IWord[]>> {
        return this.prisma.word.findMany({
            where: where,
            include: include,
            orderBy: orderBy
        }).then(x => ({
            success: true,
            data: x,
        } as IResultDataModel<IWord[]> ))
        .catch(err => ({
            success: false,
            message: JSON.stringify(err)
        } as IResultDataModel<IWord[]> ))
    }
}
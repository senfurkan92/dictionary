import { IResultDataModel, IResultModel } from '../models/entities'

export interface IRepo<TEntity> {
    insert(model:TEntity): Promise<IResultDataModel<TEntity>>,
    update(model:TEntity): Promise<IResultDataModel<TEntity>>,
    delete(id:string): Promise<IResultModel>,
    getById(id:string, include: any | null): Promise<IResultDataModel<TEntity>>,
    get(where: any, include: any | null, orderBy: any | null): Promise<IResultDataModel<TEntity>>,
    getList(where: any, include: any | null, orderBy: any | null, skip: number | 0, take: number | 10): Promise<IResultDataModel<TEntity[]>>
}
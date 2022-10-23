import { BaseModel } from "../models/entities"

interface IRepo<TEntity> {
    insert(model:TEntity): TEntity,
    update(model:TEntity): TEntity,
    delete(id:Number): Number,
    getBtId(id:Number, select: any | null, include: any): TEntity,
    get(where: any, select: any | null, include: any): TEntity,
    getList(where: any, select: any | null, include: any, orderBy: any, skip: number | 0, take: number | 10): TEntity[]
}

export default class Repo<TEntity, TClient> implements IRepo<TEntity> {
    insert(model: TEntity): TEntity {
        throw new Error("Method not implemented.");
    }
    update(model: TEntity): TEntity {
        throw new Error("Method not implemented.");
    }
    delete(id: Number): Number {
        throw new Error("Method not implemented.");
    }
    getBtId(id: Number, select: any, include: any): TEntity {
        throw new Error("Method not implemented.");
    }
    get(where: any, select: any, include: any): TEntity {
        throw new Error("Method not implemented.");
    }
    getList(where: any, select: any, include: any, orderBy: any, skip: number, take: number): TEntity[] {
        throw new Error("Method not implemented.");
    }
    
}
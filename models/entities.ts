export interface IResultModel {
    message?: string,
    success: boolean
}

export interface IResultDataModel<TEntity> extends IResultModel {
    data?: TEntity,
}

export interface IBaseModel {
    id: string,
    createDate: Date,
    updateDate: Date,
    isDeleted: boolean,
}

export interface IWord extends IBaseModel {
    content: string,
    prononciation: string,
    record: string,
    meanings: IMeaning[]
}
  
  export interface IMeaning extends IBaseModel {
    content: string,
    variety: string,
    word_id: string,
    word: IWord,
    transform?: ITransform
    sentences: ISentence[]
}

export interface ITransform extends IBaseModel {
    v1: string,
    v2: string,
    v3: string,
    meaning: IMeaning,
    meaning_id: string,
}

export interface ISentence extends IBaseModel {
    content: string,
    meaning_id: string,
    meaning: IMeaning
}
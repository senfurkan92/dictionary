import * as yup from 'yup'
import { IWordAddDto } from './dtos'

export const wordSchema = yup.object().shape({
    content: yup.string().required(),
    prononciation: yup.string().required(),
    record: yup.string().url(),
});

export interface ValidationError {
    path: string,
    message: string,
}

export interface ValidationResult {
    success: boolean,
    errors?: ValidationError[],
}

export const wordValidate = (model: IWordAddDto) : Promise<ValidationResult> => {
    return wordSchema.validate(model, {
        abortEarly: false
    }).then(_ => {
        return {
            success: true
        } as ValidationResult
    }).catch(x => {
        const errors = JSON.parse(JSON.stringify(x)).inner.map((e: {path:string, message:string}) => ({
            path: e.path,
            message: e.message
        }))
        return {
            success: false,
            errors
        } as ValidationResult
    })
}
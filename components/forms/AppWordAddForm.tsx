import { FormEvent, useRef, useState } from "react"
import { BsCheckLg } from "react-icons/bs"
import AppBtn from "../ui/AppBtn"
import AppInput from "../ui/AppInput"
import { IWordAddDto } from '../../models/dtos'
import { wordValidate, ValidationError } from '../../models/validation'

const AppWordAddForm = () => {
    const [errors, setErrors] = useState<ValidationError[]>([])

    const contentRef = useRef<HTMLInputElement>(null)
    const prononciationRef = useRef<HTMLInputElement>(null)
    const recordRef = useRef<HTMLInputElement>(null)

    const submitHandler = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const word : IWordAddDto = {
            content: contentRef.current!.value,
            prononciation: prononciationRef.current!.value,
            record: recordRef.current!.value
        }
        var validationResult = await wordValidate(word)
        if (validationResult.success) {
            setErrors([])
            console.log('nice')
        } else {
            setErrors(validationResult.errors != null ? validationResult.errors : [])
            console.log(validationResult.errors)
        }
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}> 
            <AppInput label="content" ref={contentRef}/>
            <AppInput label="prononciation" ref={prononciationRef}/>
            <AppInput label="record" ref={recordRef}/>
            <div className="text-right">
                <AppBtn bgColor="btn-success">
                    <BsCheckLg></BsCheckLg>
                </AppBtn>
            </div>
        </form>
    )
}

export default AppWordAddForm
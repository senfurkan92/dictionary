import { forwardRef } from 'react'

interface AppInputProps {
    onInput?: Function,
    onBlur?: Function,
    placeholder?: string,
    inputStyle?: string,
    type?: string,
    label: string,
    error?: string 
}

export type Ref = HTMLInputElement;

export const AppInput = forwardRef<Ref, AppInputProps>(({label, error, inputStyle = 'input-secondary', onBlur, onInput, placeholder = 'Type here...', type= 'text'}, ref) => {
    return (
        <div className="mb-8 relative">
            <label className=" text-base-content/70 italic font-semibold">{label}</label>
            <input ref={ref} type={type} placeholder={placeholder} className={`input input-bordered ${inputStyle} w-full`} />
            {
                error && (
                    <div className="text-error absolute">
                        <span>- {error}</span>
                    </div>
                )
            }
        </div>
    )
})

AppInput.displayName = "AppInput"

export default AppInput
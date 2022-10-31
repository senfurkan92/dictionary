interface AppInputProps {
    onInput?: Function,
    onBlur?: Function,
    placeholder?: string,
    inputStyle?: string,
    type?: string,
    label: string,
    error?: string 
}

const AppInput = ({label, error, inputStyle = 'input-secondary', onBlur, onInput, placeholder = 'Type here...', type= 'text'}: AppInputProps) => {
    return (
        <div className="mb-8 relative">
            <label className=" text-base-content/70 italic font-semibold">{label}</label>
            <input type={type} placeholder={placeholder} className={`input input-bordered ${inputStyle} w-full`} />
            {
                error && (
                    <div className="text-error absolute">
                        <span>- {error}</span>
                    </div>
                )
            }
        </div>
    )
}

export default AppInput
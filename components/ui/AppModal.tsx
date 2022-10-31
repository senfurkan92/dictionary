import {memo} from 'react'
import { BsXLg } from 'react-icons/bs'

interface AppModalProps {
    show: boolean,
    children: JSX.Element | JSX.Element[],
    title: string,
    closeFunc?: Function  
}

const AppModal = (props: AppModalProps) :JSX.Element => {

    const clickHandler = () => {
        if (!!props.closeFunc) {
            props.closeFunc()
        }
    }

    return (
        props.show ?
        (<div className="absolute z-50 bg-slate-500/50 w-screen h-screen top-0 left-0">
            <div className="modal-box rounded-tr-none border border-secondary top-1/3 absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button 
                    onClick={() => clickHandler()}
                    className='top-0 right-0 absolute bg-error p-2 rounded-bl-lg'
                >
                    <BsXLg></BsXLg>
                </button>
                <h3 className="font-bold text-lg mb-4 mt-2">{props.title}</h3>
                {props.children}
            </div>
        </div>)
        : (<></>)
    )
}

export default memo(AppModal)
import { useState } from "react"

const useModal = () => {
    const [show, setShow] = useState<boolean>(true)

    const closeFunc = () => {
        setShow(false)
    }

    const openFunc = () => {
        setShow(true)
    }

    return {
        modalShow : show,
        closeFunc,
        openFunc,
    }
}

export default useModal
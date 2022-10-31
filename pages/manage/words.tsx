import { NextPage } from "next"
import AppTable from "../../components/ui/AppTable"
import { BsPencil, BsTrash, BsPlus } from 'react-icons/bs'
import AppBtn from "../../components/ui/AppBtn"
import AppModal from "../../components/ui/AppModal"
import useModal from "../../hooks/use-modal"
import AppWordAddForm from '../../components/forms/AppWordAddForm'

const GetRowBtns = () : JSX.Element => {

    return (
        <div className="flex gap-4">
            <AppBtn bgColor={'btn-warning'} outline={true} size={'btn-sm'}>
                <BsPencil></BsPencil>
            </AppBtn>
            <AppBtn bgColor={'btn-error'} outline={true} size={'btn-sm'}>
                <BsTrash></BsTrash>
            </AppBtn>
        </div>
    )
} 

const Words : NextPage = () => {

    const {closeFunc, modalShow, openFunc} = useModal()
    const cols = ['title', 'content count', '#']
    const rows = [
        ['go', '5', GetRowBtns()]
    ]

    return (
        <>
            <div className="text-right mb-4">
                <AppBtn bgColor={'btn-secondary'} size={'btn-sm'} onClick={openFunc}>
                    <BsPlus></BsPlus>
                </AppBtn>
            </div>
            <AppModal show={modalShow} title={"NEW WORD"} closeFunc={closeFunc}>
                <AppWordAddForm></AppWordAddForm>
            </AppModal>
            <AppTable cols={cols} rows={rows}></AppTable>
        </>
    )
}

export default Words
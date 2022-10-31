import { BsCheckLg } from "react-icons/bs"
import AppBtn from "../ui/AppBtn"
import AppInput from "../ui/AppInput"

const AppWordAddForm = () => {
    return (
        <form>
            <AppInput label="name"/>
            <AppInput label="surname"/>
            <div className="text-right">
                <AppBtn bgColor="btn-success">
                    <BsCheckLg></BsCheckLg>
                </AppBtn>
            </div>
        </form>
    )
}

export default AppWordAddForm
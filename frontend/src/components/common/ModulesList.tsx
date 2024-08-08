import { IoIosArrowForward } from "react-icons/io"

const ModulesList = ({ image, name, hidden }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center rounded-2xl p-[16px] gap-3">
                {image}
                <p className="m-0 font-medium">{name}</p>
            </div>
            {hidden ? <></> : <IoIosArrowForward />}
        </div>
    )
}

export default ModulesList




import { AiOutlineExclamationCircle } from "react-icons/ai";

const StatusCard = ({ cardData, cardType }) => {
    return (
        <div className="rounded-2xl bg-[#C3F4FD] p-6 h-40 flex flex-col justify-between">
            <div className="flex justify-between">
                <p className="m-0 text-[44px] leading-10 text-[#01428E]">{cardData}</p>
                <AiOutlineExclamationCircle />
            </div>
            <p className="m-0">{cardType}</p>
        </div>
    )
}

export default StatusCard;
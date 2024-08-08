import { AiOutlineExclamationCircle } from "react-icons/ai";

const DeliveryInfoCard = ({ cardHeader, cardData, cardType, bgColor }) => {
    return (
        <div className={`rounded-2xl p-6 h-40 flex flex-col justify-between ${bgColor}`}>
            <div>
                <div className="flex justify-between">
                    <p className="h-2">{cardHeader}</p>
                    <AiOutlineExclamationCircle />
                </div>
                <p className="m-0 text-[32px] leading-10 text-[#01428E]">{cardData}</p>
            </div>
            <p className="m-0">{cardType}</p>
        </div>
    )
}

export default DeliveryInfoCard;
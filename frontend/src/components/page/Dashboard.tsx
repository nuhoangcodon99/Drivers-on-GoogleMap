import { RiHome2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import userImage from "../../assets/user.png"
import { Chart as ChartJS, defaults } from "chart.js/auto";
import DoughnutChart from "../common/DoughnutChart";
import LineChart from "../common/LineChart";
import StatusCard from "../common/StatusCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-[75vw] m-[50px] rounded-3xl bg-white">
                <div className="py-4 px-[50px] flex justify-between rounded-t-3xl bg-[#C3F4FD]">
                    <div className="flex gap-2 items-center">
                        <RiHome2Line />
                        <p className="m-0">Dashboard</p>
                    </div>
                    <div className="flex items-center gap-12">
                        <FaRegBell />
                        <img src={userImage} alt="" />
                    </div>
                </div>
                <div className="py-4 px-[50px]">
                    <p className="font-bold text-[66px] text-[#263071]">Dashboard</p>
                    <div className="flex justify-end gap-4">
                        <button className="flex justify-between items-center w-[170px] rounded-2xl p-[16px] border">
                            Talents
                            <MdOutlineKeyboardArrowDown />
                        </button>

                        <button className="flex justify-between items-center w-[170px] rounded-2xl p-[16px] border">
                            Year to date
                            <MdOutlineKeyboardArrowDown />
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 my-6">
                        <StatusCard cardData={"Text 1"} cardType={"Text 2"}/>
                        <StatusCard cardData={"Text"} cardType={"Text"} />
                        <StatusCard cardData={"Text"} cardType={"Text"} />
                        <StatusCard cardData={"Text"} cardType={"Text"} />
                        <StatusCard cardData={"Text"} cardType={"Text"} />
                    </div>
                    <div>
                        <div className="border p-8 rounded-2xl mt-12">
                            <LineChart />
                        </div>
                        <div className="flex gap-6 justify-between mt-6">
                            <DoughnutChart />
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
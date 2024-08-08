import { FaRegBell } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import userImage from "../../assets/user.png"
import { IoIosArrowForward } from "react-icons/io";
import DeliveryInfoCard from "../common/DeliveryInfoCard";
import { useEffect, useState } from "react";
import { getAllLogs } from "../config/ApiService";
import { Table } from "react-bootstrap";

const DeliveryList = () => {
    const [logsInfo, setLogsInfo] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getAllLogs().then((data) => {
                setLogsInfo(data);
            }).catch((error) => {
                console.log(error.message);
            });
        }, 1000);
    }, [])

    return (
        <div className="flex">
            <div className="w-[75vw] m-[50px] rounded-3xl bg-white">
                <div className="py-4 px-[50px] flex justify-between rounded-t-3xl bg-[#C3F4FD]">
                    <div className="flex gap-2 items-center">
                        <RiHome2Line />
                        <p className="m-0">Dashboard</p>
                        <IoIosArrowForward className="mx-4" />
                        <p className="m-0">Pharmacy Deliveries</p>
                    </div>
                    <div className="flex items-center gap-12">
                        <FaRegBell />
                        <img src={userImage} alt="" />
                    </div>
                </div>
                <div className="py-4 px-[50px]">
                    <p className="font-bold text-[66px] text-[#263071]">Pharmacy Deliveries</p>
                    <div className="flex justify-end gap-4">
                        <button className="flex justify-between items-center w-[170px] rounded-2xl p-[16px] border">
                            This week
                            <MdOutlineKeyboardArrowDown />
                        </button>

                        <button className="flex justify-between items-center bg-[#01428E] px-[30px] rounded-[40px]">
                            <p className="text-white m-0">Export to excel</p>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-8 my-6">
                        <DeliveryInfoCard cardHeader={"Header"} cardData={"Text"} cardType={"Text"} bgColor={"bg-[#D3E2FF]"} />
                        <DeliveryInfoCard cardHeader={"Header"} cardData={"Text"} cardType={"Text"} bgColor={"bg-[#DFFFCF]"} />
                        <DeliveryInfoCard cardHeader={"Header"} cardData={"Text"} cardType={"Text"} bgColor={"bg-[#FDCDB8]"} />
                    </div>
                    <div className="flex border rounded-t-2xl">
                        <Table striped bordered hover className="table w-1/3 rounded-tl-2xl">
                            <thead className="bg-[#01428E]">
                                <th className="py-4 text-[#FFFFFF]">Pharmacy</th>
                                <th className="py-4 text-[#FFFFFF]">Days Operated</th>
                                <th className="py-4 text-[#FFFFFF]">Completed</th>
                            </thead>

                            <tbody className="text-center">
                                {logsInfo.map((log) => (
                                    <tr key={log.id}>
                                        <td className="py-4 text-start pl-3">{log.product.name}</td>
                                        <td className="py-4">{`${log.product.createdDate}`}
                                        </td><td className="py-4"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Table className="table w-2/3 bg-[#E6E6E6]">
                            <thead className="text-center">
                                <th className="py-4 text-[#01428E]">Drives</th>
                                <th className="py-4 text-[#01428E]">Elapsed Time (hrs)</th>
                                <th className="py-4 text-[#01428E]">Drops</th>
                                <th className="py-4 text-[#01428E]">Miles Traveled</th>
                                <th className="py-4 text-[#01428E]">Falled</th>
                            </thead>
                            <tbody className="text-center">
                                {logsInfo.map((log) => (
                                    <tr key={log.id}>
                                        <td className="py-4">{`${log.driver.firstName} ${log.driver.lastName}`}</td>
                                        <td className="py-4"></td>
                                        <td className="py-4"></td>
                                        <td className="py-4"></td>
                                        <td className="py-4"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>)
}

export default DeliveryList;
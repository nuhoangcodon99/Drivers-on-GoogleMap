import { FaRegBell } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import GoogleMap from "../map/GoogleMap";
import userImage from "../../assets/user.png"
import { GoDotFill } from "react-icons/go";
import MapMarker from "../common/MapMarker";
import { FaMapMarker } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getUsersBasedOnRole } from "../config/ApiService";

const OnFleetDrivers = () => {
    const [drivers, setDrivers] = useState([]);
    const [driverEmail, setDriverEmail] = useState("");

    useEffect(() => {
        fetchDriver();
    }, [])

    const fetchDriver = async () => {
        try {
            const result = await getUsersBasedOnRole("ROLE_DRIVER");
            setDrivers(result)
        } catch (error) {
            console.log(error.message)
        }
    }

    const onDriverChange = (e) => {
        setDriverEmail(e.target.value);
    }

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
                    <div className="flex end gap-4">
                        <select
                            onChange={e => onDriverChange(e)}
                            required
                            className="form-select max-w-40"
                            name="roomType"
                        >
                            <option value="">Select Drivers</option>
                            {drivers && drivers.map && drivers.map((driver) => (
                                <option value={driver.email}>{driver.firstName} {driver.lastName}</option>
                            ))}
                        </select>

                        <button className="flex justify-between items-center w-[170px] rounded-2xl p-[16px] border">
                            Today
                            <MdOutlineKeyboardArrowDown />
                        </button>
                    </div>
                    <div className="py-8">
                        <GoogleMap driverEmail={driverEmail} />
                    </div>
                    <div>
                        <p className="font-medium text-xs mb-3">Status</p>
                        <div className="w-full border p-[16px] rounded-lg flex">
                            <div className="w-1/2">
                                <p className="font-semibold text-xs">Drivers</p>
                                <div className="flex gap-12">
                                    <MapMarker icon={<GoDotFill />} iconColor={"text-[#80CC39]"} title={"Idle"} />
                                    <MapMarker icon={<GoDotFill />} iconColor={"text-[#3A9BD5]"} title={"In transit"} />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <p className="font-semibold text-xs">Tasks</p>
                                <div className="flex gap-12">
                                    <MapMarker icon={<FaMapMarker />} iconColor={"text-[#80CC39]"} title={"Succeeded"} />
                                    <MapMarker icon={<FaMapMarker />} iconColor={"text-[#FF0B0B]"} title={"Failed"} />
                                    <MapMarker icon={<FaMapMarker />} iconColor={"text-[#3A9BD5]"} title={"In transit"} />
                                    <MapMarker icon={<FaMapMarker />} iconColor={"text-[#8D5CE9]"} title={"Assigned"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnFleetDrivers;
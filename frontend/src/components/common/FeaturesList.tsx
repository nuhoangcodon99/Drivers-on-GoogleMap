import { RiHome3Line } from "react-icons/ri";
import ModulesList from "./ModulesList";
import { FaList, FaQuestionCircle, FaRegBuilding, FaRegUserCircle } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";
import { CiHospital1, CiMail } from "react-icons/ci";
import { TbSeo, TbWallpaper } from "react-icons/tb";
import { LuUserSquare2 } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { LiaFileVideoSolid } from "react-icons/lia";
import { PiQuotes } from "react-icons/pi";
import { Link } from "react-router-dom";

const FeaturesList = () => {
    return (
        <div>
            <Link to={"/"} className="flex items-center rounded-2xl bg-[#C3F4FD] p-[16px] gap-3">
                <RiHome3Line color="#01428E" />
                <p className="m-0 text-[#01428E] font-medium">Dashboard</p>
            </Link>
            <div className="my-14">
                <div>
                    <p className="text-[#01428E] text-sm">ADMIN USERS</p>
                    <div className="flex items-center rounded-2xl p-[16px] gap-3">
                        <FaRegUserCircle />
                        <p className="m-0 font-medium">Admin Users</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="text-[#01428E] text-sm">MODULES</p>
                    <Link to={"/on-fleet-drivers"}>
                        <ModulesList image={<RiHandbagLine />} name={"Jobs"} hidden={false} />
                    </Link>
                    <ModulesList image={<CiMail />} name={"Invoices"} hidden={false} />
                    <ModulesList image={<FaRegBuilding />} name={"Companies"} hidden={false} />
                    <Link to={"/delivery-logs"}>
                        <ModulesList image={<TbWallpaper />} name={"Transaction Logs"} hidden={false} />
                    </Link>
                    <ModulesList image={<LuUserSquare2 />} name={"User Profiles"} hidden={false} />
                    <ModulesList image={<FaList />} name={"C.M.S"} hidden={false} />
                    <ModulesList image={<MdManageHistory />} name={"Manage Blogs"} hidden={false} />
                    <ModulesList image={<TbSeo />} name={"S.E.O"} hidden={true} />
                    <ModulesList image={<FaQuestionCircle />} name={"FAQs"} hidden={true} />
                    <ModulesList image={<LiaFileVideoSolid />} name={"Home Page Videos"} hidden={false} />
                    <ModulesList image={<PiQuotes />} name={"Testimonials"} hidden={false} />
                    <ModulesList image={<IoLayersOutline />} name={"Sliders"} hidden={false} />
                    <ModulesList image={<CiHospital1 />} name={"Pharmacy"} hidden={false} />
                    <Link to={"/register-driver"}>
                        <ModulesList image={<LuUserSquare2 />} name={"Register as Driver"} hidden={true} />
                    </Link>
                    <Link to={"/register-customer"}>
                        <ModulesList image={<LuUserSquare2 />} name={"Register as Customer"} hidden={true} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturesList;
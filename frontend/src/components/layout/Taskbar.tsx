import FeaturesList from "../common/FeaturesList"
import MainLogo from "../common/MainLogo"

const Taskbar = () => {
    return (
        <div className="w-1/5 max-w-[width: 20%]">
            <div className="px-6 py-[50px]" >
                <MainLogo />
                <hr className="divide-solid my-12"/>
                <FeaturesList />
            </div>
        </div>
    )
}

export default Taskbar
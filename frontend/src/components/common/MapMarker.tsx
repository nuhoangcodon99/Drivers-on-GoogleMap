const MapMarker = ({ icon, iconColor, title }) => {
    return (
        <div className="flex gap-[2px] items-center">
            <div className={`text-3xl ${iconColor}`}>{icon}</div>
            <p className="text-xs text-[#333335]">
                {title}
            </p>
        </div>
    )
}

export default MapMarker;
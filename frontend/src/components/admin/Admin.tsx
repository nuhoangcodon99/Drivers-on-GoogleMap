import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <div>
            <h1>Welcome to Admin Panel</h1>
            <div>
                <Link to={"/existing-rooms"}>Manage Rooms</Link>
                <Link to={"/existing-bookings"}>Manage Bookings</Link>
            </div>
        </div>
    )

}

export default Admin
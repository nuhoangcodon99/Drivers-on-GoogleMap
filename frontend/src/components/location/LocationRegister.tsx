import { useState } from "react";
import { createLocation } from "../config/ApiService";

const LocationRegister = ({ latitude, longitude }) => {
    const [email, setEmail] = useState("");

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const success = await createLocation(email, latitude, longitude)
            if (success !== undefined) {
                setSuccessMessage("A new location was assigned successfully !")
                setErrorMessage("")
            } else {
                setErrorMessage("Error adding new room")
            }

        } catch (error) {
            setErrorMessage(error.data)
        }
        setTimeout(() => {
            setSuccessMessage("")
            setErrorMessage("")
        }, 3000)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <section className="container mt-5 mb-5">
                <h2 className="mt-5 mb-2">Input your location</h2>
                {successMessage && (
                    <div className="alert alert-success fade show"> {successMessage}</div>
                )}

                {errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Email
                        </label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Latitude
                        </label>
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="latitude"
                            name="latitude"
                            value={latitude}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Longitude
                        </label>
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="longitude"
                            name="longitude"
                            value={longitude}
                        />
                    </div>
                    <div className="d-grid gap-2 d-md-flex mt-2">
                        <button type="submit" className="btn btn-outline-primary ml-5">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default LocationRegister;

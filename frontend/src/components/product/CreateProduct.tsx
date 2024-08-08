import { useState } from "react";
import { createProduct } from "../config/ApiService";

const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: null,
        quantity: null,
    })

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleProductInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "quantity") {
            if (!isNaN(value)) {
                value = parseInt(value);
            } else {
                value = "";
            }
        }
        setNewProduct({ ...newProduct, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const success = await createProduct(newProduct.name, newProduct.quantity)
            if (success !== undefined) {
                setSuccessMessage("A new room was added successfully !")
                setNewProduct({ name: null, quantity: null })
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

    return (
        <div>
            <section className="container mt-5 mb-5">
                <h2 className="mt-5 mb-2">Add a New Product</h2>
                {successMessage && (
                    <div className="alert alert-success fade show"> {successMessage}</div>
                )}

                {errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Product Name
                        </label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={newProduct.name}
                            onChange={handleProductInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Product Quantity
                        </label>
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                            value={newProduct.quantity}
                            onChange={handleProductInput}
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

export default CreateProduct;
import { useState, useRef, useEffect } from "react";

import { addCustomer } from "../services/customerService";
import { toast } from "react-toastify";

function CustomerModal({

    refreshCustomers,

    selectedCustomer,

    setSelectedCustomer,

}) {

    const [customer, setCustomer] = useState({

    name: "",

    email: "",

    phone: "",

    address: "",

});

useEffect(() => {

    console.log("Current Form Data:", customer);

}, [customer]);

const closeButtonRef = useRef(null);

const isEditMode = selectedCustomer !== null;

useEffect(() => {

    if (selectedCustomer) {

        setCustomer({
            id: selectedCustomer.id,
            name: selectedCustomer.name,
            email: selectedCustomer.email,
            phone: selectedCustomer.phone,
            address: selectedCustomer.address,
        });

    } else {

        setCustomer({
            name: "",
            email: "",
            phone: "",
            address: "",
        });

    }

}, [selectedCustomer]);

function handleChange(e) {

    setCustomer({

        ...customer,

        [e.target.name]: e.target.value,

    });

}
async function saveCustomer() {

    try {

        await addCustomer(customer);

        await refreshCustomers();

        setCustomer({

            name: "",

            email: "",

            phone: "",

            address: "",

        });

        closeButtonRef.current.click();

        toast.success("Customer Added Successfully!");

    }

    catch (error) {

        console.log(error);

        toast.error("Unable to save customer");

    }

}
    return (

        <div
            className="modal fade"
            id="customerModal"
            tabIndex="-1"
            aria-hidden="true"
        >

            <div className="modal-dialog modal-lg">

                <div className="modal-content">

                    <div className="modal-header">

                        <h4 className="modal-title">

                            {isEditMode ? "Edit Customer" : "Add Customer"}

                        </h4>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <div className="mb-3">

                            <label className="form-label">

                                Name

                            </label>

                            <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={customer.name}
                                    onChange={handleChange}
                                    placeholder="Enter customer name"
                                />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">

                                Email

                            </label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={customer.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">

                                Phone

                            </label>

                            <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={customer.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">

                                Address

                            </label>

                            <textarea
                                className="form-control"
                                rows="3"
                                name="address"
                                value={customer.address}
                                onChange={handleChange}
                                placeholder="Enter address"
                            ></textarea>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            ref={closeButtonRef}
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >

                            Cancel

                        </button>

                       <button
                                className="btn btn-success"
                                onClick={saveCustomer}
                            >

                                {isEditMode ? "Update Customer" : "Save Customer"}

                            </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CustomerModal;
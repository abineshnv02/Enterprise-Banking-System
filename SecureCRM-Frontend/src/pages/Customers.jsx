import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

import CustomerTable from "../components/CustomerTable";
import CustomerSearch from "../components/CustomerSearch";
import CustomerModal from "../components/CustomerModal";
import DeleteCustomerModal from "../components/DeleteCustomerModal";

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {

    loadCustomers();

        }, [search]);

    async function loadCustomers() {

        const data = await getCustomers(search);

        console.log("Customers received:", data);

        setCustomers(data);

    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Customers</h2>

                <button
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#customerModal"
                >

                    Add Customer

                </button>

            </div>
    <CustomerSearch
        search={search}
        setSearch={setSearch}
              />

    <CustomerTable

    customers={customers}

    setSelectedCustomer={setSelectedCustomer}

       />

    <CustomerModal

            refreshCustomers={loadCustomers}

            selectedCustomer={selectedCustomer}

            setSelectedCustomer={setSelectedCustomer}

            />

    <DeleteCustomerModal
            selectedCustomer={selectedCustomer}
            refreshCustomers={loadCustomers}
/>

        </div>

    );

}

export default Customers;

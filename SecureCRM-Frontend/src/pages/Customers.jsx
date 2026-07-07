import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

import CustomerTable from "../components/CustomerTable";
import CustomerSearch from "../components/CustomerSearch";
import CustomerModal from "../components/CustomerModal";
import DeleteCustomerModal from "../components/DeleteCustomerModal";
import AISummaryModal from "../components/AISummaryModal";

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [totalCustomers, setTotalCustomers] = useState(0);

    useEffect(() => {

    loadCustomers();

        }, [search, page]);

    async function loadCustomers() {

        const data = await getCustomers(search, page);

        console.log("Customers received:", data);

        setCustomers(data.results);
        setTotalCustomers(data.count);
        setHasNext(data.next !== null);
        setHasPrevious(data.previous !== null);

    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Customers</h2>

                <div className="d-flex gap-2">

    <button
        className="btn btn-primary"
        onClick={() => {
            window.open(
                "http://127.0.0.1:8000/customer/export/excel/",
                "_blank"
            );
        }}
    >
        Export Excel
    </button>

    <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#customerModal"
    >
        Add Customer
    </button>

</div>

            </div>
    <CustomerSearch
    search={search}
    setSearch={(value) => {
        setPage(1);
        setSearch(value);
    }}
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
                
    <AISummaryModal
    selectedCustomer={selectedCustomer}/>

    <div className="d-flex justify-content-between mt-4">

    <button
        className="btn btn-secondary"
        disabled={!hasPrevious}
        onClick={() => setPage(page - 1)}
    >
        Previous
    </button>

    <div className="text-center">
    <div>Page {page}</div>
    <small className="text-muted">
        Total Customers: {totalCustomers}
    </small>
        </div>

    <button
        className="btn btn-primary"
        disabled={!hasNext}
        onClick={() => setPage(page + 1)}
    >
        Next
    </button>

</div>

        </div>

    );

}

export default Customers;

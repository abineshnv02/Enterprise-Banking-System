function CustomerTable({

    customers,

    setSelectedCustomer,


}) {
    const role = localStorage.getItem("role");
    return (

        <table className="table table-hover table-bordered">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Phone</th>

                    <th>Address</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {customers.map((customer) => (

                    <tr key={customer.id}>

                        <td>{customer.id}</td>

                        <td>{customer.name}</td>

                        <td>{customer.email}</td>

                        <td>{customer.phone}</td>

                        <td>{customer.address}</td>

                        <td>
                            {role !== "Viewer" && (
                            <button

                                    className="btn btn-success btn-sm me-2"

                                    data-bs-toggle="modal"

                                    data-bs-target="#aiSummaryModal"

                                    onClick={() => setSelectedCustomer(customer)}

                                >

                                    🤖 AI

                                </button>
                            )}
                            {role !== "Viewer" && (

                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#customerModal"
                                            onClick={() => setSelectedCustomer(customer)}
                                        >
                                            Edit
                                        </button>

                                    )}

                            {role === "Admin" && (

                                    <button
                                        className="btn btn-danger btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteCustomerModal"
                                        onClick={() => setSelectedCustomer(customer)}
                                    >
                                        Delete
                                    </button>

                                )}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default CustomerTable;
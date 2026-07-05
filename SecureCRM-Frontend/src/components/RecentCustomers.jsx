import { useEffect, useState } from "react";

import { getRecentCustomers } from "../services/dashboardService";

function RecentCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        loadCustomers();

    }, []);

    async function loadCustomers() {

        const data = await getRecentCustomers();

        console.log("Recent Customers:", data);

        setCustomers(data);

    }

    return (

        <div className="card shadow mt-4">

            <div className="card-header bg-dark text-white">

                <h5 className="mb-0">

                    Recent Customers

                </h5>

            </div>

            <div className="card-body">

                <table className="table table-hover">

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Phone</th>

                        </tr>

                    </thead>

                    <tbody>

                        {customers.map((customer) => (

                            <tr key={customer.id}>

                                <td>{customer.name}</td>

                                <td>{customer.email}</td>

                                <td>{customer.phone}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default RecentCustomers;
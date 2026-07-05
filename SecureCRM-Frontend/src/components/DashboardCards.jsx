import { useEffect, useState } from "react";

import {
    FaUsers,
    FaWallet,
    FaRupeeSign,
    FaUserCheck,
} from "react-icons/fa";

import { getDashboardData } from "../services/dashboardService";

function DashboardCards() {

    const [dashboard, setDashboard] = useState({

        customers: 0,

        ledgers: 0,

        revenue: 0,

        active_users: 0,

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        const data = await getDashboardData();

        console.log("Dashboard Data:", data);

        setDashboard(data);

    }

    const cards = [

        {

            title: "Customers",

            value: dashboard.customers,

            icon: <FaUsers size={35} />,

            color: "primary",

        },

        {

            title: "Ledgers",

            value: dashboard.ledgers,

            icon: <FaWallet size={35} />,

            color: "success",

        },

        {

            title: "Revenue",

            value: `₹${dashboard.revenue.toLocaleString()}`,

            icon: <FaRupeeSign size={35} />,

            color: "warning",

        },

        {

            title: "Active Users",

            value: dashboard.active_users,

            icon: <FaUserCheck size={35} />,

            color: "danger",

        },

    ];

    return (

        <div className="row">

            {cards.map((card, index) => (

                <div className="col-md-3 mb-4" key={index}>

                    <div className={`card border-${card.color} shadow`}>

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <h6 className="text-muted">

                                        {card.title}

                                    </h6>

                                    <h3>

                                        {card.value}

                                    </h3>

                                </div>

                                <div className={`text-${card.color}`}>

                                    {card.icon}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default DashboardCards;
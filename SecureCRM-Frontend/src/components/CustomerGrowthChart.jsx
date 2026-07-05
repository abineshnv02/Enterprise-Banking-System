import { useEffect, useState } from "react";

import {
    Bar
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { getCustomerGrowth } from "../services/dashboardService";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function CustomerGrowthChart() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {

        loadChart();

    }, []);

    async function loadChart() {

        const data = await getCustomerGrowth();

        setChartData({

            labels: data.map(item =>
                new Date(item.month).toLocaleString(
                    "default",
                    { month: "short" }
                )
            ),

            datasets: [

                {
                    label: "Customers",

                    data: data.map(item => item.count),
                }

            ]

        });

    }

    return (

        <div className="card mt-4">

            <div className="card-body">

                <h4>Customer Growth</h4>

                <Bar data={chartData} />

            </div>

        </div>

    );

}

export default CustomerGrowthChart;
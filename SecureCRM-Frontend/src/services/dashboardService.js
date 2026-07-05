import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/customer";

export async function getDashboardData() {

    const response = await axios.get(

        `${BASE_URL}/dashboard/`

    );

    return response.data;

}

export async function getRecentCustomers() {

    const response = await axios.get(

        `${BASE_URL}/dashboard/recent-customers/`

    );

    return response.data;

}
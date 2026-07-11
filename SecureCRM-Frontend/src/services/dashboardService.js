import api from "./api";

const BASE_URL = "http://127.0.0.1:8000/customer";

export async function getDashboardData() {

    const response = await api.get(

        `/dashboard/`

    );

    return response.data;

}

export async function getRecentCustomers() {

    const response = await api.get(

        `/dashboard/recent-customers/`

    );

    return response.data;

}

export async function getCustomerGrowth() {

    const response = await api.get(

        "/dashboard/customer-growth/"

    );

    return response.data;

}
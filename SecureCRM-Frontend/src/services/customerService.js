import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/customer";


export async function getCustomers(
    search = "",
    page = 1,
    ordering = "-id"
) {

    const response = await axios.get(

        `${BASE_URL}/customers/?search=${search}&page=${page}&ordering=${ordering}`

    );

    return response.data;

}

export async function addCustomer(customer) {

    const response = await axios.post(

        `${BASE_URL}/customers/`,

        customer

    );

    return response.data;

}

export async function updateCustomer(id, customer) {

    const response = await axios.put(

        `${BASE_URL}/customers/${id}/`,

        customer

    );

    return response.data;

}

export async function deleteCustomer(id) {

    const response = await axios.delete(

        `${BASE_URL}/customers/${id}/`

    );

    return response.data;

}

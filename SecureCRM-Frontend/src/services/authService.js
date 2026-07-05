import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/customer";

export async function login(username, password) {

    const response = await axios.post(

        `${BASE_URL}/token/`,

        {

            username,

            password,

        }

    );

    return response.data;

}
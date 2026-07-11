import api from "./api";

const BASE_URL = "http://127.0.0.1:8000/customer";

export async function login(username, password) {

    const response = await api.post(

        "/token/",

        {

            username,

            password,

        }

    );

    return response.data;

}

export async function register(user) {

    const response = await api.post(

        "/register/",

        user

    );

    return response.data;

}
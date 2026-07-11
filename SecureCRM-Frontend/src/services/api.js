// import axios from "axios";

// const api = axios.create({

//     baseURL: "http://127.0.0.1:8000/customer",

// });

// api.interceptors.request.use(

//     (config) => {

//         const token = localStorage.getItem("access");

//         if (token) {

//             config.headers.Authorization = `Bearer ${token}`;

//         }

//         return config;

//     },

//     (error) => {

//         return Promise.reject(error);

//     }

// );

// export default api;

import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/customer",
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("access");

    console.log("JWT Token:", token);
    console.log("Request URL:", config.url);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Headers:", config.headers);

    return config;

});

export default api;
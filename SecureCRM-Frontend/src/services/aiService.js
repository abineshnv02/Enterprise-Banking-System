import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/customer";

export async function generateSummary(customerId) {

    const response = await axios.post(

        `${BASE_URL}/ai-summary/`,

        {
            customer_id: customerId,
        }

    );

    return response.data;

}
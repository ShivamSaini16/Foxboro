import { API_URL } from "./client"
import axios from 'axios';



// ------show product---------------
export const showProducts = async () => {
    try {
        const resp = await axios.get(`${API_URL}/:id:`)
        return resp.data;
    } catch (error) {
        console.error("Error fetching owners by admin:", error);
        return catchError;

    }
}


export const oneProductShow = async (id) => {
    try {
        // Make a GET request to the backend API with the product ID
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Assuming the backend responds with { product, success }
    } catch (error) {
        console.error("Error fetching product:", error.message);
        throw error; // Throw the error so it can be handled by the caller
    }
};


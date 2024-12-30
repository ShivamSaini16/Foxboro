import { ADMIN_URL, API_URL,AUTH_URL } from "./client"
import axios from 'axios';

//Admin Login
export const userLogin = async(data)=>{
try {
    const resp=await axios.post(`${AUTH_URL}/login`,data)
    return resp.data;
} catch (error) {
    console.error("Error fetching owners by admin:", error);
    return catchError;
}
}


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

// -------BannerGetApi----------------------------

export const bannerPhoto = async () => {
    try {
        const response = await axios.get(`${API_URL}/get-banner-images`)
        return response.data
    } catch (error) {
        return catchError;
    }
}


export const saveProductDetails = async (product,token) => {
    const response = await fetch(`${ADMIN_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${token}`
       },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Failed to save product details");
    }
    return response.json();
  };
  
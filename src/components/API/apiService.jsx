import axios from "axios";

// Set the base URL for your API
const BASE_URL = "http://backend:8000";

export const fetchSetData = async (setId) => {
  try {
    const response = await axios.get(`${BASE_URL}/sets/${setId}/getData`);
    return response.data; // Assuming the API returns the data in the response body
  } catch (error) {
    console.error("Failed to fetch set data:", error);
    throw error; // Rethrow the error for handling in components
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/createUser`, { user });
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

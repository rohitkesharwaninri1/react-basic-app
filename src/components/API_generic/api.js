import axios from 'axios';


const TIMEOUT_DURATION = 5000;

const axiosInstance = axios.create({
  timeout: 5000, // Timeout duration in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});


// Generic GET API function
const getAPI = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return {error: false, data: response.data};
  } catch (error) {
    console.error('Error fetching data:', error);
    return {error: true, message: error};
  }
};

// Generic POST API function
const postAPI = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Generic PUT API function
const putAPI = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Generic DELETE API function
const deleteAPI = async (url, id) => {
  try {
    const response = await axiosInstance.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export { getAPI, postAPI, putAPI, deleteAPI };

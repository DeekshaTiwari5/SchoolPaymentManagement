import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from './constants';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all transactions
export const getAllTransactions = async (filters) => {
  try {
    const response = await axiosInstance.get(ENDPOINTS.TRANSACTIONS, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

// Fetch transactions by school ID
export const getTransactionsBySchool = async (schoolId) => {
  try {
    const response = await axiosInstance.get(
      `${ENDPOINTS.TRANSACTIONS_BY_SCHOOL}/${schoolId}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions by school:', error);
    return [];
  }
};

// Check transaction status
export const checkTransactionStatus = async (customOrderId) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.CHECK_STATUS, {
      custom_order_id: customOrderId,
    });
    return response.data.status;
  } catch (error) {
    console.error('Error checking transaction status:', error);
    return null;
  }
};

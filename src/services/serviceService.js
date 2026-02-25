import axios from 'axios';

const API_BASE_URL = 'https://eeriest-asymptotically-sherie.ngrok-free.dev/api';

const serviceService = {
    createService: async (serviceData) => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
                'Accept': 'application/json',
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.post(`${API_BASE_URL}/service/create`, serviceData, { headers });
            return response.data;
        } catch (error) {
            console.error('Error creating service:', error);
            throw error;
        }
    },

    getAllServices: async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
            };
            const userData = JSON.parse(localStorage.getItem("userData") || "{}");
            const providerId = userData.id;

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.get(`${API_BASE_URL}/service/detail/${providerId}`, { headers });
            return response.data;
        } catch (error) {
            console.error('Error fetching services:', error);
            throw error;
        }
    },

    getProviderData: async () => {
        try {
            const token = localStorage.getItem("token");
            const userData = JSON.parse(localStorage.getItem("userData") || "{}");
            const providerId = userData.id;

            const headers = {
                'ngrok-skip-browser-warning': 'true',
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.get(`${API_BASE_URL}/provider/${providerId}`, { headers });
            return response.data;
        } catch (error) {
            console.error('Error fetching provider data:', error);
            throw error;
        }
    },

    deleteService: async (id) => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.delete(`${API_BASE_URL}/service/delete/${id}`, { headers });
            return response.data;
        } catch (error) {
            console.error('Error deleting service:', error);
            throw error;
        }
    },

    updateService: async (id, serviceData) => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
                'Accept': 'application/json',
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.put(`${API_BASE_URL}/service/${id}`, serviceData, { headers });
            return response.data;
        } catch (error) {
            console.error('Error updating service:', error);
            throw error;
        }
    }
};

export default serviceService;

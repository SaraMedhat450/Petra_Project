import axios from 'axios';

const API_BASE_URL = 'https://eeriest-asymptotically-sherie.ngrok-free.dev/api';

const serviceService = {
    createService: async (serviceData) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${API_BASE_URL}/service`, serviceData, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : '',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating service:', error);
            throw error;
        }
    },

    getAllServices: async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API_BASE_URL}/service`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Authorization': token ? `Bearer ${token}` : '',
                }
            });
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

            const response = await axios.get(`${API_BASE_URL}/provider/${providerId}`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Authorization': token ? `Bearer ${token}` : '',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching provider data:', error);
            throw error;
        }
    }
};

export default serviceService;

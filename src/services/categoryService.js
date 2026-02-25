import axios from 'axios';

const API_BASE_URL = 'https://eeriest-asymptotically-sherie.ngrok-free.dev/api';

const categoryService = {
    getAllCategories: async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const response = await axios.get(`${API_BASE_URL}/category`, { headers });
            return response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    getServiceTitles: async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const response = await axios.get(`${API_BASE_URL}/service_title`, { headers });
            return response.data;
        } catch (error) {
            console.error('Error fetching service titles:', error);
            throw error;
        }
    },

    getSubCategories: async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'ngrok-skip-browser-warning': 'true',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const response = await axios.get(`${API_BASE_URL}/subcategory`, { headers });
            return response.data;
        } catch (error) {
            console.error('Error fetching subcategories:', error);
            throw error;
        }
    }
};

export default categoryService;

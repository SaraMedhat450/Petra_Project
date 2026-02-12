import axios from 'axios';

const API_BASE_URL = 'https://eeriest-asymptotically-sherie.ngrok-free.dev/api';

const categoryService = {
    getAllCategories: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/category`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    getServiceTitles: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/service_title`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching service titles:', error);
            throw error;
        }
    },

    getSubCategories: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/subcategory`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching subcategories:', error);
            throw error;
        }
    }
};

export default categoryService;

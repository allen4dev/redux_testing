import axios from 'axios';

const baseURL = 'localhost:8000/api';

const api = {
  auth: {
    async login() {
      const url = `${baseURL}/auth/login`;

      const response = await axios.get(url);

      return response;
    },
  },
};

export default api;

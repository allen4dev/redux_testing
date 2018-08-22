import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const api = {
  auth: {
    async login(credentials) {
      const response = await instance.post('auth/login', credentials);

      return response;
    },
  },
};

export default api;

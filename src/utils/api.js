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

    async register(details) {
      const response = await instance.post('auth/register', details);

      return response;
    },
  },

  tweets: {
    async fetchTimeline(token) {
      const response = await instance.get('me/timeline', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response;
    },

    async publish(details, token) {
      const response = await instance.post('tweets', details, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response;
    },

    async fetchTweetReplies(id) {
      const response = await instance.get(`tweets/${id}`);

      return response;
    },
  },
};

export default api;

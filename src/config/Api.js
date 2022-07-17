import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BASE_API || 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${localStorage.getItem('token')}` || null,
  },
});

export default instance;

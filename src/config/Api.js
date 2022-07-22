import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BASE_API || 'http://localhost:3000',
  timeout: 20000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;

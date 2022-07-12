import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.BASE_API || 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
});

export default Api;

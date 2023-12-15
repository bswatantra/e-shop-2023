import axios from "axios";

const https = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
});

export default https;
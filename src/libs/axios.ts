import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        accept: 'application/json',
        Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
});

export default axios;

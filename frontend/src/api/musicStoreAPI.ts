import axios from 'axios';

export const musicStoreAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MUSICSTORE_API_URL,
});

export default musicStoreAPI
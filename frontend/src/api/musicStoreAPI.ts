import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_MUSICSTORE_API_URL);

export const musicStoreAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MUSICSTORE_API_URL,
});

export default musicStoreAPI
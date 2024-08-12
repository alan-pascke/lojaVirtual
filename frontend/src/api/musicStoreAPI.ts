import axios from 'axios';

export const musicStoreAPI = axios.create({
    baseURL: 'http://localhost:5000',
});

export default musicStoreAPI
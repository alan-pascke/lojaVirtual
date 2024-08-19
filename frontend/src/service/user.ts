import musicStoreAPI from "@/api/musicStoreAPI";

export const getUsers = async () => {
    const response = await musicStoreAPI.get(`/getUsers`);
    const data = await response.data;
    return data;
};

export const getUser = async (id: number) => {
    const response = await musicStoreAPI.get(`/getUser/${id}`);
    const data = await response.data;
    return data;
}

export const createUser = async (name: string, email: string, password: string) => {
    const response = await musicStoreAPI.post('/createUser', { name, email, password }); 
    const data = await response.data;
    return data;
}
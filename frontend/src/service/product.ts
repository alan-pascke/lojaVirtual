import musicStoreAPI from "@/api/musicStoreAPI";

export const getProducts = async () => {
    const response = await musicStoreAPI.get(`/getProducts`);
    const data = await response.data;
    return data;
  };

export const getProduct = async (id: number) => {
    const response = await musicStoreAPI.get(`/getProduct/${id}`);
    const data = await response.data;
    return data;
  };
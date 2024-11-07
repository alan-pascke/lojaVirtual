import musicStoreAPI from "@/api/musicStoreAPI";


export const isProtected = async () => {
    musicStoreAPI.get(`/protected`)
    .then((response ) =>  response)
    .catch((error) => error)
};
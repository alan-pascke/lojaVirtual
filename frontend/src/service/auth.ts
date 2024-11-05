import musicStoreAPI from "@/api/musicStoreAPI";

export const checkAuth = async () => {
    try {
        const response = await musicStoreAPI.get('/check-auth', { withCredentials: true })
        return await response.data.authenticated
        
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return
        }
        console.error('Erro ao verificar autenticação:', error);
    }
    
};

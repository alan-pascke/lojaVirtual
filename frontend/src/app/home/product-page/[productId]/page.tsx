/**
 * A function that renders a product page based on the provided product ID.
 *
 * @param {Object} params - An object containing the product ID.
 * @param {number} params.productId - The ID of the product to be rendered.
 * @return {JSX.Element} The rendered product page.
 */

'use client'
import { getProduct } from "@/service/product";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function ProductPage({params} : {params : {productId: number}}) {

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['product'],
        queryFn:() => getProduct(params.productId), 
        }
    );

    const router = useRouter()
    
    if (!data) {
        return <div>Loading...</div>
    }

    const addToCart = (id: number) => {
        
    }

    const buyProduct = (id: number) => {
        router.push(`/payment-page/${id}` );
    }

    return(
        <div className='flex h-[84vh] mt-20 text-gray-600'>

            <div className="flex-none min-w-[300px] w-1/2 border">
                <Image src={'/'} alt={data.name} width={300} height={300}  />
            </div>

            <div className="flex 1/2">

                <div className="grid h-full ms-2 p-2 px-8">
               
                    <div className="text-xl mt-4">
                        {data.description}
                    </div>

                    <div className="text-2xl">
                        R$ {data.price}
                    </div>

                    <div className="flex flex-col">
                        <label>Calcular o frete</label>
                        <input type="text" placeholder="000000000-00"  className="ring-transparent border-none rounded-sm ps-1 outline-none bg-gray-200"/> 
                        <div className="mt-2">Valor do frete: R$ 0,00</div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-white">
                        <button 
                            className="w-full h-11 bg-teal-500 border rounded-md hover:bg-teal-400 transition-all mb-2"
                            onClick={() => buyProduct(data.id)}    
                            >Comprar
                        </button>
                        <button className="w-full h-11 bg-teal-500 border rounded-md hover:bg-teal-400 transition-all">Adicionar ao carrinho</button>
                    </div>


                </div>

               
            </div>
        </div>
    )
};

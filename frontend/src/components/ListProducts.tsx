'use client'
import { getProducts } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";



export default function ListProducts() {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['products'],
        queryFn:() => getProducts(), 
        }
    );

    const router = useRouter();

    const handleClick = (id: number) => {
      router.push(`/home/product-page/${id}` );
    }

    if (!data) { 
        return (
            <div>
                Loading...
            </div>
        )
    }
    
    return(
        <div className="flex flex-wrap">
            {data.map((product: ProductType, index: number) => {
                return (
                    <div key={index} className="border m-1 p-1 cursor-pointer" onClick={()=> handleClick(product.id)}> 
                        <div className="h-36 border flex justify-center items-center">
                            imagem
                        </div>

                        <div className="w-60 p-2">
                            {product.description}
                        </div>

                        <div className="flex justify-end">
                            R$ {product.price}
                        </div>

                    </div>
                )
            })}
        </div>
    )
};

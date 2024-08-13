/**
 * A function that renders a product page based on the provided product ID.
 *
 * @param {Object} params - An object containing the product ID.
 * @param {number} params.productId - The ID of the product to be rendered.
 * @return {JSX.Element} The rendered product page.
 */

'use client'
import { getProduct } from "@/service/product";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function ProductPage({params} : {params : {productId: number}}) {

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['product'],
        queryFn:() => getProduct(params.productId), 
        }
    );
    
    if (!data) {
        return <div>Loading...</div>
    }

    return(
        <Container>
            <div className="mt-28 h-screen grid grid-cols-7 border">
                <div className="border col-span-3 grid items-center justify-center">
                    <Image src={''} alt={data.brand}></Image>
                </div>
                <div className="grid col-span-4">
                    <div className="flex flex-col justify-end items-end pe-4 border">
                        <button className="border h-11 w-48 flex items-center justify-center mb-2">
                            Comprar    
                        </button>
                        <button className="border h-11 w-48 flex items-center justify-center">
                            Adicionar no Carrinho  
                        </button>

                    </div>
                </div>

            </div>
        </Container>
    )
};

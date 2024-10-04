'use client'
import { getProducts } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";



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


    
    return (
        <div className="p-10 w-full flex justify-center sm:m-2 border">
            <Carousel opts={{ align: 'start', loop: true}} className="w-sreen lg:max-w-6xl max-w-sm md:max-w-3xl ">
                <CarouselContent className="-ml-1 gap-1 ">
                    {data.map((product: ProductType, index: number) => (
                    <CarouselItem key={index} className="pl-2 sm:basis-1/2  lg:basis-1/4">
                   
                        <Card onClick={()=> handleClick(index + 1)} className="w-64 h-[450px] cursor-pointer" >
                            <CardHeader>
                                <div className="h-[300px] border-b flex justify-center items-center">
                                    imagem
                                </div>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center mt-4 h-[96px] ">
                                <div className="text-balance h-full line-clamp-3 " >{product.description}</div>
                            </CardContent>
                            <CardFooter>
                                <span>
                                    R$ {product.price}
                                </span>
                            </CardFooter>
                        </Card>
                       
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      )
};

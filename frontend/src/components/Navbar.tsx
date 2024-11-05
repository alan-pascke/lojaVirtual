'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Login from "./Login";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Register from "./Register";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {

    const { isAuthenticated } = useAuth();

    const items = Array.from({length: 10}, (_, i) => i + 1);

    return(
        <div className="flex h-16 border justify-center">
            <div className="container grid grid-cols-2 items-center w-full px-3">
                <Link href={'/home'} className=""> Home </Link>
                {!isAuthenticated ? (
                    <div className="flex justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger>

                                <div className="flex items-center p-1">
                                    <UserCircleIcon className='size-6'/>
                                    <span className="underline text-sm" >
                                        Faça login ou cadastre-se! 
                                    </span>
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="flex flex-col w-56 p-2 gap-2">
                                <Login/>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full">Cadastre-se</Button>
                                    </DialogTrigger>
                            
                                    <DialogContent className="sm:max-w-[425px] max-h-[calc(100dvh-20px)] overflow-y-auto scrollbar">
                                        <DialogHeader className='mb-7 flex justify-self-center'>
                                            <DialogTitle>
                                                Cadastro
                                            </DialogTitle>
                                        </DialogHeader>
                                        <Register/>
                                    </DialogContent> 
                                </Dialog>
                                
                            </DropdownMenuContent>
                        </DropdownMenu>


                    </div>
                    ) : (
                    <div className='flex justify-end gap-4 '>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="relative h-12 w-12 flex  items-center ">
                                    <ShoppingCartIcon className='flex items-center size-9'/> 
                                    <Badge className="absolute top-0 right-0 bg-gray-400 text-xs px-1 hover:bg-gray-400 outline">{items.length}</Badge>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="h-56 w-36 overflow-y-scroll scrollbar">
                                <DropdownMenuLabel className="text-center">Itens</DropdownMenuLabel>
                                {items ? ( 
                                    items.map((element: any, index) => (
                                        <DropdownMenuItem key={index}>{element}</DropdownMenuItem>
                                    ))
                                ) : (
                                    <div>Não há itens no seu carrinho</div>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Perfil</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    )
                }
            </div>
        </div>
    )
};

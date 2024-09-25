'use client'
// import { Container } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";


export default function Navbar() {



    const [userIslogged, setUserIsLogged] = useState(false);

    return(
        <div className="flex h-14 border justify-center">
            <div className="container grid grid-cols-2 items-center w-full px-3">
                <Link href={'/home'} className="">
                    Home   
                </Link>
                {!userIslogged ? (
                    <div className="flex justify-end">
                        Entrar
                    </div>
                    ) : (
                    <div className='flex justify-end '>
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

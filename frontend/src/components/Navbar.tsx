'use client'
// import { Container } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";


export default function Navbar() {

    return(
        <div className="flex h-14 border justify-center">
            <div className="container flex items-center w-full border">
                <Link href={'/home'} className="">
                    HOME    
                </Link>
                {/* <div className='relative border'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>Perfil</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div> */}
            </div>
        </div>
    )
};

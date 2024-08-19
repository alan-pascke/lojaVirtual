'use client'
// import { Container } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Navbar() {

    return(
        <div className="container flex h-10 border items-center">
            <div className="flex w-full justify-end border">
                {/* <ShoppingCartIcon className='cursor-pointer'/> */}
            </div>
        </div>
    )
};

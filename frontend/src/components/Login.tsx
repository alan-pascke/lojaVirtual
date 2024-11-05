import { Input } from "./ui/input";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "./ui/button";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import musicStoreAPI from "@/api/musicStoreAPI";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";


type FormValues = {
    email: string;
    password: string;
  };

export default function Login() {
    
    const { login } = useAuth();
    const [open, setOpen] = useState(false);
    const { handleSubmit, formState:{errors}, register} = useForm<FormValues>();

    

    const onSubmit: SubmitHandler<FormValues> = async (data) => {

        try {
            const response = await musicStoreAPI.post('/login', data, {withCredentials: true});

            if (response.status === 200) {
                login()
                setOpen(false)
            }
            
        } catch (error: any) {
            console.log(error.response.data);
        }

    };

    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full">Entrar</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]" >
                <DialogHeader className="mb-7 flex justify-self-center">
                    <DialogTitle>
                        Entrar
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
                    <div className="grid">
                        <div className='flex items-center gap-1 border rounded-md shadow-sm'>
                            <EnvelopeIcon className='size-6 ps-1'/>
                            <Input
                                className="border-none shadow-none"
                                type="email" 
                                placeholder="seuemail@email.com" 
                                {...register("email", {required: 'Digite o seu email!'})}
                            />
                        </div>
                        <div className='h-7'>
                            {errors.email && 
                                <div className="flex text-red-600 text-sm">
                                    {errors.email.message}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="grid ">
                        <div className='flex items-center gap-1 border rounded-md shadow-sm'>
                            <KeyIcon className="size-6 ps-1"/>
                            <Input 
                                className="border-none shadow-none"
                                type="password" 
                                placeholder="**********"  
                                {...register('password', {required: 'Digite sua senha!'})}
                            />
                        </div>
                        <div className='h-7'>
                            {errors.password && 
                                <div className="flex text-red-600 text-sm">
                                    {errors.password.message}
                                </div>
                            }
                        </div>
                    </div>
                    <Button type="submit" className=''>
                        Login
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
        
    )
};

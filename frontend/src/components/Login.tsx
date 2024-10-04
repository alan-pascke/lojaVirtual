import { Input } from "./ui/input";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "./ui/button";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

type FormValues = {
    email: string;
    password: string;
  };

export default function Login() {
    const { handleSubmit, formState:{errors}, register} = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };


    return(
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
     
    )
};

import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

//user informations
type UserFormValues = {
    name: string,
    cpf: string,
    email: string,
    password: string,
    address: AdressValues[]
}

type AdressValues = {
    street_homeNumber: string,
    city_state: string,
    zip_code: string, 

}

export default function Register() {
    const { handleSubmit, formState:{errors}, register} = useForm<UserFormValues>();

    const onSubmit: SubmitHandler<UserFormValues> = (data) => {
        console.log(data);
    };

    const messageRequired = () => (
        <div className="flex text-red-600 text-sm">
            {"Este campo é obrigatório!"}                
        </div>
    );

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-1">
            <h4 className="bg-zinc-200 ps-2 mb-3 text-zinc-500">Informações Pessoais</h4>
            <div className=''>
                <Label>Nome</Label>
                <div className="flex items-center gap-1">
                    <Input
                        type="text" 
                        placeholder="Yngwie Malmsteen" 
                        {...register("name", {required: true})}  
                    />
                </div>
                <div className='h-5'>
                    {errors.name && (
                        messageRequired()
                    )}
                </div>
            </div>

            <div>
                <Label>CPF</Label>
                <div className='flex items-center gap-1'>
                    <Input
                        type="text"
                        placeholder="0000000000"
                        {...register("cpf", {required: true})}
                    />
                </div>
                <div className='h-5'>
                    {errors.email && (
                        messageRequired()
                    )}
                </div>
            </div>

            <div className="">
                <Label>Email</Label>
                <div className="flex items-center gap-1">

                    <Input
                        type="email" 
                        placeholder="ymalmsteen@email.com" 
                        {...register("email", {required: true})}  
                    />
                </div>
                <div className='h-5'>
                    {errors.email && (
                        messageRequired()
                    )}
                </div>
            </div>

            <div className="">
                <Label>Senha</Label>
                <div className="flex items-center gap-1">
                    <Input
                        type="password" 
                        placeholder="min 6 caracteres" 
                        {...register("password", {required: 'Digite a sua senha!'})}  
                    />
                </div>
                <div className='h-5'>
                    {errors.password && (
                        messageRequired()
                    )}
                </div>
            </div>

            <Separator/>

            <h4 className="bg-zinc-200 ps-2 mb-3 mt-4 text-zinc-500">Endereço</h4>
            <div>
                <Label>Endereço completo</Label>
                <div className="flex items-center gap-1">
                    <Input
                        type="text" 
                        placeholder="Rua Kiko Loureiro, 123" 
                        {...register(`address.${0}.street_homeNumber`, {required: true})}  
                        />
                </div>
                <div className='h-5'>
                    {errors.address && errors.address[0]?.street_homeNumber && (
                        messageRequired()
                    )}
                </div>
            </div>
            <div>
                <div>
                    <Label>Cidade/Estado</Label>
                    <Input
                        type='text'
                        placeholder="Broklyn / NY"
                        {...register(`address.${0}.city_state`, {required: true})}
                    />
                </div>
                <div className='h-5'>
                    {errors.address && errors.address[0]?.city_state && (
                        messageRequired()
                    )}
                </div>
            </div>
            <div>
                <div>
                    <Label>CEP</Label>
                    <Input
                        type='text'
                        placeholder="00000000"
                        {...register(`address.${0}.zip_code`, {required: true})}
                    />
                </div>
                <div className='h-5'>
                    {errors.address && errors.address[0]?.zip_code && (
                        messageRequired()
                    )}
                </div>
            </div>
            <Button type="submit">
                Cadastrar
            </Button>
        </form>
    )
};

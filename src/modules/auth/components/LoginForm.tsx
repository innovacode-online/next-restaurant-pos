"use client"
import { useState } from 'react'

import { toast } from 'sonner';
import { Button, Input } from '@nextui-org/react'
import { loginWithCredentials } from '../actions/login-with-credentials';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const { email, password } = e.target as HTMLFormElement;

        if (email.value.trim() === '' || password.value.trim() === '') {
            toast.warning("Ocurrio un error", {
                description: "Todos los campos deben ser llenados"
            })
            setIsLoading(false);

            return;
        }

        // TODO: Agregar login con credenciales
        const { error, message } = await loginWithCredentials(email.value, password.value)

        if (error) {
            toast.warning("Ocurrio un error", {
                description: message
            })
            setIsLoading(false);

            return;
        }

        toast.success(message)

        setIsLoading(false);

        router.push('/admin/home');


    }


    return (
        <form onSubmit={handleSubmit} className='login__form'>
            <Input
                type='email'
                name='email'
                label="Correo Electronico"
                variant='underlined'
            />

            <Input
                type='password'
                name='password'
                label="Contraseña"
                variant='underlined'
            />

            <Button
                type='submit'
                color='primary'
                fullWidth
                isLoading={isLoading}
                isDisabled={isLoading}
            >
                Iniciar Sesion
            </Button>


        </form>
    )
}

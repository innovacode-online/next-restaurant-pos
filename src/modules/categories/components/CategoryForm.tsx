"use client"
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';
import { Button, Input } from '@nextui-org/react'
import { createCategory } from '../actions/create-category';

export const CategoryForm = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        setIsLoading( true );

        const { categoryName, image } = e.target as HTMLFormElement;


        if( categoryName.value.trim() === '' ){
            toast.warning("Ocurrio un error", {
                description: "Todos los campos son obligatorios"
            })

            setIsLoading( false );

            return;
        };


        const formData = new FormData();

        formData.append("name", categoryName.value );
        formData.append("image", image.files[0]);

        console.log(formData);

        // EJECUTAR SERVER ACTIONS
        const { error, message } = await createCategory(formData);

        if( error ){
            toast.warning("Ocurrio un error", {
                description: message
            })

            setIsLoading( false );

            return;
        }

        toast.success(message)

        setIsLoading( false );

        router.push('/admin/categories')
        return;
    }


    return (
        <form onSubmit={handleSubmit} className='bg-white px-6 pt-8 pb-12 border border-gray-300 rounded space-y-6' >
            <h2 className='text-2xl font-semibold'>Formulario</h2>

            <Input
                name='categoryName'
                label="Nombre"
                placeholder='Agrega un nombre a la categoria'
                variant='underlined'
            />

            <input type='file' name='image' />

            <Button
                type='submit'
                color='primary'
                className='block'
                isLoading={ isLoading }
                isDisabled={ isLoading }
            >
                Guardar Categoria
            </Button>

        </form>
    )
}

"use client"
import { FormEvent, useState } from 'react';
import { Category, Product } from '@prisma/client'

import { createProduct } from "@/modules/products";
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


interface Props {
    id?: string;
    product?: Product;
    categories: Category[];
}

export const ProductForm = ({ id, product, categories }: Props) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const { productName, description, image, price, stock, categoryId } = e.target as HTMLFormElement;

        const formData = new FormData();
        formData.append('name', productName.value);
        formData.append('description', description.value);
        formData.append('image', image.files[0]);
        formData.append('price', price.value);
        formData.append('stock', stock.value);
        formData.append('categoryId', categoryId.value);


        // const { error, message } = await updateProduct(formData);
        const { error, message } = await createProduct(formData);


        if (error) {
            toast.error("Ocurrio un error", {
                description: message
            })
            setIsLoading(false);
            return;
        }

        toast.success(message);
        router.push('/admin/products');
        setIsLoading(false);
    }


    return (
        <section className='container pt-8'>
            <div className='bg-white px-6 pt-8 pb-12 border border-gray-300 rounded'>
                <h2 className='text-2xl font-semibold mb-6'>Formulario</h2>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <Input
                        variant='underlined'
                        label="Nombre"
                        placeholder='Agrega un nombre al producto'
                        name='productName'
                    />

                    <Textarea
                        variant='underlined'
                        name='description'
                        label="Descripcion"
                        placeholder='Agrega la descripcion del producto'
                    ></Textarea>

                    <Input
                        variant='underlined'
                        label="Precio"
                        placeholder='Ingrese el precio'
                        step='0.01'
                        min={0}
                        type='number'
                        name='price'
                    />
                    <Input
                        variant='underlined'
                        label="Stock"
                        placeholder='Ingrese el stock disponible'
                        min={0}
                        type='number'
                        name='stock'
                    />

                    <input type="file" name="image" id="image" />

                    <Select
                        label="Categorias"
                        placeholder='Selecciona una categoria'
                        name='categoryId'
                        variant='underlined'
                    >
                        {
                            categories.map(category => (
                                <SelectItem value={category.id} key={category.id}>
                                    {category.name}
                                </SelectItem>
                            ))
                        }

                    </Select>

                    <Button
                        type='submit'
                        color='primary'
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Guardar Producto
                    </Button>


                </form>

            </div>
        </section>
    )
}

import Image from 'next/image'
import { Product } from '@prisma/client'

import { useCartStore } from '@/modules/cart';

import { Button, Card } from '@nextui-org/react'
import { ShoppingCart01Icon } from 'hugeicons-react';


interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {

    const { addProductToCart } = useCartStore();

    return (
        <Card
            isPressable
            shadow='md'
            className='md:max-h-[275px] border-none rounded-xl'
            fullWidth
        >

            <div className='text-center grid md:grid-cols-2 gap-4 p-4'>
                {/* IMAGEN */}
                <div className='rounded-md md:max-h-[200px] h-full object-cover md:max-w-[200px] w-full overflow-hidden'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        className='w-full object-cover object-center h-full'
                        height={200}
                        width={200}
                    />
                </div>

                {/* DETALLES */}
                <div className='text-start flex flex-col justify-between'>
                    {/* DETALLES */}
                    <div className='space-y-2 text-gray-600 mb-2'>
                        <h3 className='text-xl font-bold text-black line-clamp-1'>{ product.name }</h3>

                        <p className='line-clamp-2'>{ product.description }</p>

                        <p>
                            <span className='font-bold text-black'>Stock:</span> { product.stock }
                        </p>
                        <p>
                            <span className='font-bold text-black'>Precio:</span> { product.price }
                        </p>
                    </div>

                    {/* BUTTON */}
                    <Button
                        onClick={() => addProductToCart( product )  }
                        color='primary'
                        startContent={ <ShoppingCart01Icon/> }
                    >
                        Agregar al carrito
                    </Button>

                </div>
            </div>


        </Card>
    )
}

"use client"

import { useCartStore, CartList } from '@/modules/cart'

import { Button } from '@nextui-org/react'
import { Cancel01Icon } from 'hugeicons-react'

export const SideCart = () => {

    const { isCartOpen, handleCartOpen, total } = useCartStore();

    return (
        <div className={`side__cart ${ isCartOpen && 'side__cart--show' }`}>
            <div className='flex items-center justify-between'>

                <h3 className='font-bold text-2xl'>Carrito de compras</h3>
                
                <Button
                    variant='light'
                    isIconOnly
                    radius='full'
                    onClick={handleCartOpen}
                    startContent={ <Cancel01Icon/> }
                />
            </div>

            {/* LISTADO DE CARRITO */}
            <CartList/>

            <div className='flex-1'></div>

            <p className='flex justify-between'>
                <span className='text-lg font-bold text-gray-500'>Total:</span>
                <span className='text-primary font-bold'>{ total }$</span>
            </p>

            <Button
                fullWidth
                color='primary'
                
            >
                Generar Orden
            </Button>
        </div>
    )
}

"use client"
import { useState } from 'react'
import { toast } from 'sonner'

import { useCartStore, CartList } from '@/modules/cart'

import { Button } from '@nextui-org/react'
import { Cancel01Icon } from 'hugeicons-react'
import { createNewOrder } from '@/modules/orders/actions/create-new-order'

export const SideCart = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { isCartOpen, handleCartOpen, total, cart, cleanCart } = useCartStore();


    const generateNewOrder = async () => {
        setIsLoading( true );

        if( cart.length === 0 ){
            toast.warning("No hay elementos en el carrito");
            return;
        }

        const { error, message } = await createNewOrder( cart, total );

        if( error ){
            toast.error(message);
            setIsLoading( false );
            return;
        }

        toast.success(message);

        setIsLoading( false );
        cleanCart();

    }


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
                onClick={generateNewOrder}
                isLoading={ isLoading }
                isDisabled={ isLoading }
            >
                Generar Orden
            </Button>
        </div>
    )
}

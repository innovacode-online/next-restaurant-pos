
import React from 'react'
import { Button } from '@nextui-org/react'
import { Cancel01Icon } from 'hugeicons-react'

export const SideCart = () => {
    return (
        <div className='side__cart side__cart--show'>
            <div className='flex items-center justify-between'>

                <h3 className='font-bold text-2xl'>Carrito de compras</h3>
                
                <Button
                    variant='light'
                    isIconOnly
                    radius='full'
                    startContent={ <Cancel01Icon/> }
                />
            </div>

            {/* LISTADO DE CARRITO */}

            <div className='flex-1'></div>

            <p className='flex justify-between'>
                <span className='text-lg font-bold text-gray-500'>Total:</span>
                <span className='text-primary font-bold'>150$</span>
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

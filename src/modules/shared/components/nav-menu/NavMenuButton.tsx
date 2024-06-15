"use client"
import React from 'react'
import { Button } from '@nextui-org/react'
import { Menu01Icon } from 'hugeicons-react'
import { useUIStore } from '../../stores/ui.store'

export const NavMenuButton = () => {
    
    const { handleMenuOpen } = useUIStore();

    return (
        <Button
            onClick={ handleMenuOpen }
            variant='light'
            isIconOnly
            radius='full'
            className='text-sm md:hidden'
            startContent={<Menu01Icon/> }
        />
    )
}

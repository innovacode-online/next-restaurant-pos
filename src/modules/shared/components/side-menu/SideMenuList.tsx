import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@nextui-org/react'
import { Home01Icon, Invoice01Icon, Layers01Icon, MenuSquareIcon, UserMultipleIcon } from 'hugeicons-react'

export const SideMenuList = () => {

    const router = useRouter();
    const pathname = usePathname();



    return (
        <ul className='flex flex-col gap-4'>
            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                onClick={() => router.push("/admin/home")}
                className={`${pathname.includes('/admin/home') ? 'sidemenu__item--active' : 'sidemenu__item'}`}
                startContent={<Home01Icon />}
            >
                Inicio
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                onClick={() => router.push("/admin/products")}
                className={`${pathname.includes('/admin/products') ? 'sidemenu__item--active' : 'sidemenu__item'}`}
                startContent={<MenuSquareIcon />}
            >
                Productos
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                onClick={() => router.push("/admin/categories")}
                className={`${pathname.includes('/admin/categories') ? 'sidemenu__item--active' : 'sidemenu__item'}`}
                startContent={<Layers01Icon />}
            >
                Categorias
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                onClick={() => router.push("/admin/orders")}
                className={`${pathname.includes('/admin/orders') ? 'sidemenu__item--active' : 'sidemenu__item'}`}
                startContent={<Invoice01Icon />}
            >
                Ordenes
            </Button>

            <Button
                as='li'
                size='lg'
                variant='light'
                color='primary'
                onClick={() => router.push("/admin/users")}
                className={`${pathname.includes('/admin/users') ? 'sidemenu__item--active' : 'sidemenu__item'}`}
                startContent={<UserMultipleIcon />}
            >
                Usuarios
            </Button>

        </ul>
    )
}

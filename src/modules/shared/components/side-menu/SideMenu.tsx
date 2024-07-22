"use client"

import { useUIStore } from "../../stores/ui.store"

import { Button } from "@nextui-org/react";
import { SideMenuList } from "./SideMenuList"
import { Cancel01Icon } from "hugeicons-react";
import { closeSession } from "@/modules/auth";

export const SideMenu = () => {

    const { isOpenMenu, handleMenuOpen } = useUIStore();

    return (
        <nav className={ isOpenMenu ? 'sidemenu sidemenu-show' : 'sidemenu' }>
            {/* LOGO */}
            <div className="pt-8 mb-6">
                <h3 className="font-bold text-2xl">
                    Next <span className="text-primary">POS</span>
                </h3>
            </div>

            {/* MENU */}
            <SideMenuList/>


            {/* CLOSE BUTTON RESPONSIVE */}
            <Button
                className="flex md:hidden mx-auto"
                variant="light"
                isIconOnly
                radius="full"
                onClick={ handleMenuOpen }
                startContent={ <Cancel01Icon/> }
            />

            {/* CLOSE SESSION */}
            <Button
                fullWidth
                onClick={async () => { await closeSession() } }
                color="danger"
                variant="light"
                className="mt-auto"
            >
                Cerrar Sesion
            </Button>

        </nav>
    )
}

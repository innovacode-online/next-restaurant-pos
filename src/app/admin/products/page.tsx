"use client"

import { useUIStore } from "@/modules/shared/stores/ui.store";
import { Button } from "@nextui-org/react";

export default function ProductsPage() {

    const { handleMenuOpen } = useUIStore();

    return (
        <div>
            <h1>pagina productos</h1>

            {/* <button onClick={saludo} className="bg-indigo-500 px-3 py-2 rounded-3xl text-white cursor-pointer hover:bg-indigo-600">Agregar productos</button> */}
            <Button onClick={handleMenuOpen} color="success">Abrir menu</Button>
        </div>
    );
}
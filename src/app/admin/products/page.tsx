import { HeaderPage } from "@/modules/shared";
import { ProductTable } from "@/modules/products";

export default function ProductsPage() {
    return (
        <>
            <HeaderPage
                title="Productos"
                description="Gestion de productos y comidas en el restaurante"
                linkName="Agregar Producto"
                pathName="/admin/products/new"
            />

            {/* PRODUCT TABLE */}
            <ProductTable/>
        </>
    );
}
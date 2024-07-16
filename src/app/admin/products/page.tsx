import { HeaderPage } from "@/modules/shared";
import { getAllProducts, ProductTable } from "@/modules/products";

export default async function ProductsPage() {

    const products = await getAllProducts();
    

    return (
        <>
            <HeaderPage
                title="Productos"
                description="Gestion de productos y comidas en el restaurante"
                linkName="Agregar Producto"
                pathName="/admin/products/new"
            />

            {/* PRODUCT TABLE */}
            <ProductTable
                products={ products }
            />
        </>
    );
}
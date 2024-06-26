import { HeaderPage } from "@/modules/shared";
import { ProductForm } from "@/modules/products";
import { getCategories } from "@/modules/categories";

export default async function CreateNewProductPage() {

    const categories = await getCategories();


    return (
        <>
            <HeaderPage
                title="Agrega un nuevo producto"
                description="Agrega una nuevo producto a tu gestion de restaurante"
                linkName="Volver"
                pathName="/admin/products"
            />

            <ProductForm
                categories={ categories }
            />

        </>
    );
}
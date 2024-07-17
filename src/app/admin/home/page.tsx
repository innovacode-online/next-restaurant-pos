
import { HeaderPage } from "@/modules/shared";
import { ProductList } from "@/modules/products";
import { CategorySelector, getCategories } from "@/modules/categories";

export default async function HomePage() {

    const categories = await getCategories();

    return (
        <>
            <HeaderPage
                title="Menu virtual"
                description="Menu virtual del restaurante"
                pathName="/admin/products/new"
                linkName="Agregar producto"
            />

            {/* CATEGORY SELECTOR */}
            <CategorySelector
                categories={ categories }
            />

            {/* PRODUCT LIST */}
            <ProductList/>
        </>
    );
}
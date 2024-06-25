import { HeaderPage } from "@/modules/shared";
import { CategoryTable, getCategories } from "@/modules/categories";

export default async function CategoriesPage() {

    // OBTENER CATEGORIAS
    const categories = await getCategories();

    return (
        <>
            {/* HEADER */}
            <HeaderPage
                description="Listado de tus categorias en el restaurante"
                title="Categorias"
                linkName="Nueva categoría"
                pathName="/admin/categories/new"
            />

            {/* TABLA DE CATEGORIAS */}
            <CategoryTable
                categories={ categories }
            />

        </>
    );
}
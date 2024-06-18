import { HeaderPage } from "@/modules/shared";
import { CategoryTable } from "@/modules/categories";

export default function CategoriesPage() {
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
            <CategoryTable/>

        </>
    );
}
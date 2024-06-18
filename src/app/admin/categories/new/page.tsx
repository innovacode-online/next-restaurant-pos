import { HeaderPage } from "@/modules/shared";
import { CategoryForm } from "@/modules/categories";

export default function NewCategoryPage() {
    return (
        <>
            {/* HEADER */}
            <HeaderPage
                description="Agrega una nueva categoria para tus productos"
                title="Agregar Categoria"
                linkName="Volver"
                pathName="/admin/categories"
            />

            {/* FORMULARIO */}
            <section className="container pt-8">
                <CategoryForm/>
            </section>
        
        </>
    );
}
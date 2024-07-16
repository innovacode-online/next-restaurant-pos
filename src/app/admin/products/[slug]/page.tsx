import { getAllProducts, getProductBySlug, ProductDetails } from "@/modules/products";
import { HeaderPage } from "@/modules/shared";
import { notFound } from "next/navigation";

interface Params {
    params: {
        slug: string;
    }
}

export default async function ProductDetailsPage({ params }: Params ) {

    const { slug } = params;
    
    const product = await getProductBySlug(slug);

    if( !product ){
        notFound();
    }

    return (
        <>
            <HeaderPage
                title={ product.name }
                description="Detalles del producto"
                linkName="Volver"
                pathName="/admin/products"
            />

            <ProductDetails product={ product } />

        </>
    );
}

export async function generateStaticParams(){
    const products = await getAllProducts();

    return products.map( product => ({
        slug: product.slug
    }))
}

export const revalidate = 5
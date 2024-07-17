"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";

import { Product } from "@prisma/client";
import { getProductsByCategory } from '@/modules/products';

import { CircularProgress } from "@nextui-org/react";
import { ProductCard } from "./ProductCard";


export const ProductList = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([])

    const categorySlug = useSearchParams().get('category');
    
    const updateProductList = async () => {
        setIsLoading(true);
        
        const productsResponse = await getProductsByCategory( categorySlug );

        setProducts( productsResponse );

        setIsLoading(false);
    }

    useEffect(() => {
        updateProductList();
    }, [categorySlug])
    

    
    if( isLoading ){
        return (
            <section className="min-h-[80vh] flex flex-col justify-center items-center">
                <CircularProgress aria-label="progess indicator" color="primary" size="lg"/>
            </section>
        )
    }

    
    return (
        <section className="pt-8 container">
            
            <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {
                    products.map(product => (
                        <li key={ product.id }>
                            <ProductCard  product={ product }/>
                        </li>
                    ))
                }
            </ul>
        
        </section>
    )
}

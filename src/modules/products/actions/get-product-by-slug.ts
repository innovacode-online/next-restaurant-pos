"use server"

import { prisma } from "@/lib/prisma"


export const getProductBySlug = async (slug: string) => {
    try {
        
        const product = await prisma.product.findFirst({
            where: {
                slug: slug,
            },
            include: {
                category: true,
            },

        })

        return product;

    } catch (error) {
        console.log(error);
        throw error;
    }


}
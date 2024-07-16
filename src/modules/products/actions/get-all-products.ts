"use server"

import { prisma } from "@/lib/prisma"


export const getAllProducts = async () => {

    try {
    
        const products = await prisma.product.findMany({
            include: {
                category: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        });

        return products;

    } catch (error) {
        console.log(error)
        throw error;
    }

}
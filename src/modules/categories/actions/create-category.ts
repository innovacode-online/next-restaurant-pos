"use server"
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";

import { prisma } from "@/lib/prisma";
import { createSlug } from "@/helpers/creaate-slug";
import { revalidatePath } from "next/cache";

interface ICreateCategory {
    name: string;
    slug: string;
    image: File | string;
}

export const createCategory = async (formData: FormData) => {
    
    const category = {
        name: formData.get('name'),
        image: formData.get('image'),
        slug: ''
    } as ICreateCategory;


    try {

        // SUBIR IMAGEN
        const imageUrl = await uploadImage(category.image as File);
        category.image = imageUrl;

        // CREAR SLUG
        const slug = createSlug(category.name);
        category.slug = slug;

        // VALIDAR CATEGORIA
        const categoryExists = await prisma.category.findFirst({
            where: {
                slug
            }
        })

        if( categoryExists ){
            return {
                error: true,
                message: "Ya se registro una categoria con este nombre"
            }    
        }

        // GUARDAR CATEGORIA
        await prisma.category.create({
            data: {
                ...category,
                image: category.image as string,
            }
        });

        // redirect('/admin/categories');
        revalidatePath('/admin/categories')

        
        return {
            error: null,
            message: "Se guardo la categoria"
        }
        


    } catch (error) {
        console.log(error);
        return {
            error: true,
            message: "Revise los logs del sistema"
        }

    }
}


const uploadImage = async (image: File) => {
    try {

        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`)
            .then( response => response.secure_url )


    } catch (error) {
        throw error;
    }
}
"use server"

import { createSlug } from "@/helpers/creaate-slug";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

export const udpateCategory = async (formData: FormData) => {

    const image = formData.get('image');
    const slug = createSlug(formData.get('name') as string);
    

    if ( image === undefined ){

        try {
            
            const imageUrl = await uploadImage(image as File);
            
            const category = {
                id: formData.get('id') as string,
                name: formData.get('name') as string,
                image: imageUrl,
                slug
            }

            await prisma.category.update({
                where: { id: category.id },
                data: category
            });
            
            revalidatePath('/admin/categories')

            return {
                error: null,
                message: "Se actualizo la categoria"
            };


        } catch (error) {
            console.log(error);
            return {
                error: true,
                message: "Revise los logs del sistema"
            };
        }

    } 
    

    const category = {
        id: formData.get('id') as string,
        name: formData.get('name') as string,
        slug
    }
       
    try {
        
        await prisma.category.update({
            where: { id: category.id },
            data: category
        });

        revalidatePath('/admin/categories')

        return {
            error: null,
            message: "Se actualizo la categoria"
        };

    } catch (error) {
        console.log(error);
        return {
            error: true,
            message: "Revise los logs del sistema"
        };
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
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function GET(request: Request) {

    await prisma.user.deleteMany();

    const users = await prisma.user.createMany({
        data: [
            { 
                email: "admin@innovacode.com",
                name: "Innova Code",
                password: bcrypt.hashSync("Admin123"),
                image: "https://lh3.googleusercontent.com/a/AAcHTtfNj1wKEavkDynCql_1qI9opNtoUTDJr1uOfHYtbCCCmw=s96-c"
            },
            { 
                email: "mattias@innovacode.com",
                name: "Mattias Duarte",
                password: bcrypt.hashSync("Admin123"),
                image: "https://lh3.googleusercontent.com/a/AAcHTtfNj1wKEavkDynCql_1qI9opNtoUTDJr1uOfHYtbCCCmw=s96-c"
            },

        ]
    })

    return NextResponse.json({
        users
    })



}
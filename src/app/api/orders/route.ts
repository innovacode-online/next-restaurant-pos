import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
    const orders = await prisma.order.findMany({
        include: {
            details: {
                select: {
                    productName: true,
                    productPrice: true,
                    quantity: true,
                    subTotal: true,
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return Response.json(orders);

}
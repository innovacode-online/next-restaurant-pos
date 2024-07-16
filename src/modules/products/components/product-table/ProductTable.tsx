"use client"


import { DeleteProductModal, IProduct } from '@/modules/products';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import Image from 'next/image';


interface Props {
    products: IProduct[]
}

export const ProductTable = ({ products }: Props) => {
    return (
        <section className='container pt-8'>
            <Table aria-label='Products management table'>
                <TableHeader>
                    <TableColumn>IMAGEN</TableColumn>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>CATEGORIA</TableColumn>
                    <TableColumn>STOCK</TableColumn>
                    <TableColumn>PRECIO</TableColumn>
                    <TableColumn>FECHA DE CREACION</TableColumn>
                    <TableColumn>ACCIONES</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Image
                                        alt={product.name}
                                        src={product.image}
                                        width={70}
                                        height={70}
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.category?.name}</TableCell>
                                <TableCell>{product.stock}u.</TableCell>
                                <TableCell>{product.price}$</TableCell>
                                <TableCell>{JSON.stringify(product.createdAt)}</TableCell>
                                <TableCell>
                                    <DeleteProductModal productId={product.id} />
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </section>
    )
}

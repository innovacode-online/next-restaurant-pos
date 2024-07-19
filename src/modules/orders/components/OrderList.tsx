"use client"
import useSWR from 'swr';
import { CircularProgress } from '@nextui-org/react';
import { IOrderWithDetails } from '../interfaces/order-with-details';
import { OrderCard } from './OrderCard';


export const OrderList = () => {

    const url = "/api/orders";
    const fetcher = () => fetch(url)
        .then(res => res.json())
        .then(data => data);

    const { data, error, isLoading } = useSWR<IOrderWithDetails[]>(url, fetcher, {
        refreshInterval: 1000,
        revalidateOnFocus: false,
    });




    if (isLoading) {
        return (
            <section className="min-h-[80vh] flex flex-col justify-center items-center">
                <CircularProgress aria-label="progess indicator" color="primary" size="lg" />
            </section>
        )
    }

    if (error) {
        console.log(error)
        return (
            <section className="min-h-[80vh] flex flex-col justify-center items-center">
                <p>Ocurrio un error</p>
            </section>
        )
    }

    return (
        <section className='pt-8 container'>
            <ul className='grid sm:grid-cols-2 2xl:grid-cols-3 gap-4'>
                {
                    data?.map(order => (
                        <li
                            key={order.id}

                        >
                            <OrderCard
                                order={order}
                            />
                        </li>
                    ))
                }
            </ul>

        </section>
    )
}

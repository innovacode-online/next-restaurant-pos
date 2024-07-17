"use client"

import { useRouter, useSearchParams } from "next/navigation"
import type { Category } from "@prisma/client"

import { Button } from "@nextui-org/react"


interface Props {
    categories: Category[]
}

export const CategorySelector = ({ categories }: Props) => {
    
    const router = useRouter();
    const categoryParam = useSearchParams().get('category');

    console.log(categoryParam)
    
    return (
        <section className="pt-8 container">

            <ul className="flex gap-4">
                <Button
                    as='li'
                    color="primary"
                    onClick={() => router.push(`/admin/home`)}
                    variant={ !categoryParam ? 'solid' : 'ghost' }
                >
                    Todos
                </Button>

                {
                    categories.map( category => (
                        <Button
                            key={ category.id }
                            as='li'
                            variant={ categoryParam === category.slug ? 'solid' : 'ghost' }
                            color="primary"
                            onClick={() => router.push(`/admin/home?category=${ category.slug }`)}
                        >
                            { category.name }
                        </Button>
                    ))
                }

            </ul>

        </section>
    )
}

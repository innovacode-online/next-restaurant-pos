"use client"
import { FormEvent, useState } from 'react'
import { Category } from '@prisma/client';
import { udpateCategory } from '../../actions/update-category';

import { PencilEdit01Icon } from 'hugeicons-react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'


interface Props {
    category: Category;
}

export const UpdateCategoryModal = ({ category }: Props) => {

        
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading( true );

        const { categoryName, image } = e.target as HTMLFormElement;

        const formData = new FormData();

        formData.append('id', category.id)
        formData.append('name', categoryName.value);
        formData.append('image', image.files[0] ? image.files[0] : null );

        await udpateCategory(formData)

        onClose();
        setIsLoading( false );
    }

    return (
        <>
            <Button
                onPress={onOpen}
                isIconOnly
                color='primary'
                variant='light'
                startContent={<PencilEdit01Icon />}
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader>Editar Categoria</ModalHeader>

                            <ModalBody>

                                <Input
                                    name='categoryName'
                                    placeholder='Actualizar el nombre'
                                    variant='underlined'
                                    defaultValue={ category.name }
                                />

                                <input type="file" name='image' />

                            </ModalBody>

                            <ModalFooter>
                                <Button color='danger' variant='light' onPress={onClose}>Cancelar</Button>

                                <Button
                                    color='primary'
                                    type='submit'
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                >
                                    Actualizar
                                </Button>

                            </ModalFooter>

                        </form>
                    )}

                </ModalContent>
            </Modal>


        </>
    )
}

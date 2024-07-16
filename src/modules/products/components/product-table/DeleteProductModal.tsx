"use client"
import { useState } from 'react'
import { toast } from 'sonner';

import { deleteProduct } from '@/modules/products';

import { Delete01Icon } from 'hugeicons-react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'


interface Props {
    productId: string;
}

export const DeleteProductModal = ({ productId }: Props) => {

        
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleSubmit = async () => {
        setIsLoading(true);

        const { error, message } = await deleteProduct( productId );

        if( error ){
            toast.error('Ocurrio un error', {
                description: message
            })
            setIsLoading(false);
            return;
        }

        toast.success(message);

        setIsLoading(false);
        onClose();

    }

    return (
        <>
            <Button
                onPress={onOpen}
                isIconOnly
                color='danger'
                variant='light'
                startContent={<Delete01Icon />}
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Eliminar Producto</ModalHeader>

                            <ModalBody>
                                <p>¿Esta seguro de eliminar el producto?</p>
                            </ModalBody>

                            <ModalFooter>
                                <Button color='danger' variant='light' onPress={onClose}>Cancelar</Button>

                                <Button
                                    color='primary'
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                    onPress={handleSubmit}
                                >
                                    Eliminar
                                </Button>

                            </ModalFooter>

                        </>
                    )}

                </ModalContent>
            </Modal>


        </>
    )
}

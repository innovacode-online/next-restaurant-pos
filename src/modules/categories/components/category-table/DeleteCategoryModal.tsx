"use client"
import { useState } from 'react'

import { deleteCategory } from '../../actions/delete-category';

import { toast } from 'sonner';
import { Delete01Icon } from 'hugeicons-react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'


interface Props {
    categoryId: string;
}

export const DeleteCategoryModal = ({ categoryId }: Props) => {

    
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleSubmit = async () => {
        setIsLoading( true );

        // SERVER ACTION
        const { error, message } = await deleteCategory(categoryId);

        if( error ){
            toast.error("Ocurrio un error",{
                description: message
            });

            return;
        }

        toast.success(message);

        onClose();
        setIsLoading( false );
    }

    return (
        <>
            <Button
                onPress={ onOpen }
                isIconOnly
                color='danger'
                variant='light'
                startContent={<Delete01Icon />}
            />

            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Eliminar Categoria</ModalHeader>
                            
                            <ModalBody>
                                <p>¿Esta seguro de eliminar la categoria?</p>
                            </ModalBody>

                            <ModalFooter>
                                <Button color='danger' variant='light' onPress={onClose}>Cancelar</Button>
                                
                                <Button
                                    color='primary'
                                    isLoading={ isLoading }
                                    isDisabled={ isLoading }
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

import { Product } from '@prisma/client';
import { ICart } from '../interfaces/cart';
import { StateCreator, create } from 'zustand';
import { toast } from 'sonner';
import { persist } from 'zustand/middleware';

interface CartState {
    cart: ICart[];
    total: number;
    isCartOpen: boolean;
}


interface Actions {
    handleCartOpen: () => void;

    addProductToCart: ( product: Product ) => void;

    incrementQuantity: ( id: string ) => void;
    decrementQuantity: ( id: string ) => void;
    removeProductToCart: (id: string) => void

    calcTotal: () => void;
    cleanCart: () => void;
}

const storeApi: StateCreator<CartState & Actions> = (set, get) => ({
    cart: [],
    total: 0,
    isCartOpen: false,


    handleCartOpen: () => {
        const { isCartOpen } = get();
        set({ isCartOpen: !isCartOpen });
    },

    addProductToCart: ( product: Product ) => {
        const { cart, calcTotal } = get();

        const productExists = cart.some( item => item.product.id == product.id );

        if( productExists ){
            toast.warning('El producto ya se agrego');
            return;
        }

        set({
            cart: [...cart, { product, quantity: 1 }]
        })

        toast.success('Producto agregado al carrito');
        calcTotal();

    },

    incrementQuantity: (id: string) => {
        const { cart, calcTotal } = get();
        
        const updateCartProducts = cart.map( item => {

            if( item.product.id == id ){
                return { ...item, quantity: item.quantity + 1 };
            }

            return item;

        });

        set({ cart: updateCartProducts });
        calcTotal();
    },
    
    decrementQuantity: (id: string) => {
        const { cart, removeProductToCart, calcTotal } = get();

        const deleteProductToCart = cart.filter( item => item.product.id == id );

        if( deleteProductToCart[0].quantity === 1 ){
            removeProductToCart( id );
            return;
        }

        const updateCartProducts = cart.map(item => {

            if( item.product.id === id ){
                return { ...item, quantity: item.quantity - 1 }
            }

            return item;
        })

        set({ cart: updateCartProducts });
        calcTotal();
    },

    removeProductToCart: ( id: string ) => {
        const { cart, calcTotal } = get();
        
        const updateCartProducts = cart.filter(item => item.product.id != id );

        set({ cart: updateCartProducts });
        calcTotal();
    },

    calcTotal: () => {
        const { cart } = get();

        let subTotal = 0;

        cart.forEach(item => {
            subTotal += item.product.price * item.quantity;
        })

        set({ total: subTotal });

    },

    cleanCart: () => {
        set({ cart: [], total: 0 });
    }

})


export const useCartStore = create<CartState & Actions>()(
    persist(
        storeApi,
        { name: "cart-menu-storage" }
    )
);
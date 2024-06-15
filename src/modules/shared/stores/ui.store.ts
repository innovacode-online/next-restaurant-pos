import { StateCreator, create } from "zustand";


interface UIState {
    isOpenMenu: boolean
}

interface Actions {
    handleMenuOpen: () => void
}

// LOGICA DE PROGRAMACION
const storeApi: StateCreator<UIState & Actions> = (set, get) => ({

    isOpenMenu: false,

    handleMenuOpen: () => {
        const { isOpenMenu } = get();
        
        set({
            isOpenMenu: !isOpenMenu
        })   
    }


})


// PROVEEDOR DE LOGICA DE PROGRAMACION
export const useUIStore = create(
    storeApi,
)   


import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type ProductPersist = (
    set: (newState: Partial<ProductState>) => void,
    get: () => ProductState
) => ProductState;

type ProductType = "CURTAIN" | "ROLLER BLIND" | "EYELET" | "SKYLIGHT" | ""

type Products = {
  name: string,
  type: ProductType[],
  price : number,

}

interface ProductState {
    allProducts: any[];
    newProducts : any[];
    focusProducts: any[];
    addProductToCart: (product: any) => void;
    removeProductFromCart: (product: any) => void;
}

export const useCartStore = create<ProductState>()(
    persist<ProductState>(
        (set, get) => ({
            productsInCart: [],
            productAmount : 0,
            addProductToCart:() => set(() => ({productAmount : get().productAmount+1})),
            removeProductFromCart: () => set(() => ({productAmount : 0}))
        }), {
            name: 'cartState',
            storage: createJSONStorage(() => localStorage)
        } as PersistOptions<ProductState, ProductState>

    )
)
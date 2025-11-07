import { create } from 'zustand';
import { createJSONStorage, persist} from 'zustand/middleware';

type ProductType = "CURTAIN" | "ROLLER BLIND" | "EYELET" | "SKYLIGHT" | ""

type Products = {
  name: string,
  type: ProductType[],
  price : number,

}

interface ProductState {
    allProducts: Products[];
    newProducts : Products[];
    focusProducts: Products[];
    addProduct: (product: Products) => void;
    removeProduct: (productName: string) => void;
}

export const useCartStore = create<ProductState>()(
    persist<ProductState>(
        (set) => ({
            allProducts: [],
            newProducts: [],
            focusProducts: [],
            addProduct:(product: Products) => set(state => ({
                allProducts : [...state.allProducts, product]
            })),
            removeProduct: (productName: string) => set(state =>({
                allProducts : state.allProducts.filter(p => p.name !== productName)
            }))
        }), {
            name: 'productState',
            storage: createJSONStorage(() => localStorage)
        }
    )
)
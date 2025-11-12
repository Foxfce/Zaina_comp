import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ProductType = "ROLLER BLIND"
    | "VERTICAL BLIND"
    | "WOODEN BLIND"
    | "EYELET"
    | "INTERIOR FILM"
    | "VINYL TILES"
    | "SKYLIGHT"
    | "MOTOR SYSTEM";

type Color = {
    colorName : string,
    colorCode: string,
}

type Products = {
    name: string,
    type: ProductType[],
    typeName: string,
    material: string,
    color: Color[]
}

interface ProductState {
    allProducts: Products[];
    newProducts: Products[];
    focusProducts: Products[];
    addProduct: (product: Products) => void;
    removeProduct: (productName: string) => void;
}

export const useCartStore = create<ProductState>()(
    (
        (set) => ({
            allProducts: [],
            newProducts: [],
            focusProducts: [],
            addProduct: (product: Products) => set(state => ({
                allProducts: [...state.allProducts, product]
            })),
            removeProduct: (productName: string) => set(state => ({
                allProducts: state.allProducts.filter(p => p.name !== productName)
            }))
        })
    )
)
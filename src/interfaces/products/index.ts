import { ReactNode } from 'react';

export interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    image: string;
    quantity?: number;
}

export interface ProductProps {
    children: ReactNode;
}

export interface ProductContextData {
    filteredProducts: Product[];
    addProduct: (data: Product) => void;
    deleteProduct: (idProduct: string) => void;
    filterByName: (name: string) => void;
}

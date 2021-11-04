import { ReactNode } from 'react';
import { Product } from '../products';

export interface CartProps {
    children: ReactNode;
}

export interface CartContextData {
    cartProducts: Product[];
    sendToCart: (product: Product) => void;
    removeToCart: (idProduct: number) => void;
    removeOneInCart: (idProduct: number) => void;
    removeAllProducts: () => void;
}

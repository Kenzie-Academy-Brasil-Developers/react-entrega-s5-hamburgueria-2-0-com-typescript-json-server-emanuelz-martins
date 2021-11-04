import { createContext, useContext, useState } from 'react';
import { CartContextData, CartProps } from '../../interfaces/cart';
import { Product } from '../../interfaces/products';

export const CartContext = createContext<CartContextData>(
    {} as CartContextData,
);

export const CartProvider = ({ children }: CartProps) => {
    const [cartProducts, setCartProducts] = useState<Product[]>(
        [] as Product[],
    );

    const sendToCart = (product: Product) => {
        setCartProducts([...cartProducts, product]);
    };

    const removeToCart = (idProduct: number) => {
        const newCartList = cartProducts
            .filter(({ id }) => id === idProduct)
            .slice(1);
        const filtred = cartProducts.filter(({ id }) => id !== idProduct);
        setCartProducts([...filtred, ...newCartList]);
    };

    const removeOneInCart = (idProduct: number) => {
        const newCartList = cartProducts.filter(({ id }) => id !== idProduct);
        setCartProducts(newCartList);
    };

    const removeAllProducts = () => {
        setCartProducts([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                removeAllProducts,
                removeOneInCart,
                removeToCart,
                sendToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

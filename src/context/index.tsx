import { ReactNode } from 'react';
import { CartProvider } from './cart';
import { ProductProvider } from './product';
import { UserProvider } from './user';

interface ContextProps {
    children: ReactNode;
}

export const Contexts = ({ children }: ContextProps) => (
    <UserProvider>
        <ProductProvider>
            <CartProvider>{children}</CartProvider>
        </ProductProvider>
    </UserProvider>
);

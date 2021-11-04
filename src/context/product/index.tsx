import { createContext, useContext, useEffect, useState } from 'react';
import { request } from '../../api';
import {
    Product,
    ProductContextData,
    ProductProps,
} from '../../interfaces/products';

export const ProductContext = createContext<ProductContextData>(
    {} as ProductContextData,
);

export const ProductProvider = ({ children }: ProductProps) => {
    const [products, setProducts] = useState<Product[]>([] as Product[]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(
        [] as Product[],
    );
    const [token] = useState<string>(localStorage.getItem('@token') || '');

    useEffect(() => {
        request
            .get('/products')
            .then(({ data }) => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const addProduct = (data: Product) => {
        request
            .post('/products', data, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((_) => console.log('send to cart'))
            .catch((error) =>
                console.error({ msg: 'missed: send product to cart', error }),
            );
    };

    const deleteProduct = (idProduct: string) => {
        request
            .delete(`/products/${idProduct}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => console.log('deletado'))
            .catch((error) => console.error(error));
    };

    const filterByName = (name: string) => {
        name
            ? setFilteredProducts(
                  [...products].filter((item) =>
                      item.name.toLowerCase().includes(name.toLowerCase()),
                  ),
              )
            : setFilteredProducts([...products]);
    };

    return (
        <ProductContext.Provider
            value={{
                addProduct,
                deleteProduct,
                filterByName,
                filteredProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);

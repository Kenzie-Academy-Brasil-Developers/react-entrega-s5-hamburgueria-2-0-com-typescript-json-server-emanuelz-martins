import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartSection from '../../components/CartSection/inedx';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { useProduct } from '../../context/product';
import { useUser } from '../../context/user';
import { MainContainer, ProductList, ShowCase } from './styles';

const Home = () => {
    const { auth } = useUser();
    const { filteredProducts } = useProduct();
    const [showCart, setShowCart] = useState<boolean>(false);
    const history = useHistory<History>();

    if (!auth) {
        history.push('/login');
    }

    return (
        <div>
            <Header showCart={showCart} setShowCart={setShowCart} />
            <MainContainer>
                <section>
                    {showCart ? (
                        <CartSection setShowCart={setShowCart} />
                    ) : (
                        <></>
                    )}
                </section>
                <ShowCase>
                    <ProductList>
                        {filteredProducts.map((product, index) => (
                            <li key={index}>
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ProductList>
                </ShowCase>
            </MainContainer>
        </div>
    );
};

export default Home;

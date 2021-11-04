import { useCart } from '../../context/cart';
import { CgClose } from 'react-icons/cg';
import {
    AddButton,
    BodyProductInfo,
    Cart,
    CartBody,
    CartHeader,
    CartOptions,
    CartProductCard,
    CloseCart,
    Cost,
    CostTotal,
    Counter,
    Divider,
    EmptyCartInfo,
    EmptyCartTitle,
    Frame,
    Image,
    ProductName,
    RemoveAllButton,
    RemoveContainer,
    SubButton,
    Title,
    Total,
} from './styles';
import { FaTrash } from 'react-icons/fa';

interface CartSectionProps {
    setShowCart: boolean | any;
}
const CartSection = ({ setShowCart }: CartSectionProps) => {
    const {
        cartProducts,
        removeToCart,
        removeOneInCart,
        removeAllProducts,
        sendToCart,
    } = useCart();

    const cartFiltred = cartProducts.filter(
        (product, index, list) =>
            list.map((product) => product.id).indexOf(product.id) === index,
    );
    const totalCost = cartProducts.reduce(
        (accumulator, product) => accumulator + parseFloat(product.price),
        0,
    );

    return (
        <Cart>
            <CartHeader>
                <Title>Carrinho de compras</Title>
                <CloseCart onClick={() => setShowCart(false)}>
                    <CgClose />
                </CloseCart>
            </CartHeader>
            <CartBody>
                {cartFiltred.length === 0 && (
                    <>
                        <EmptyCartTitle>Sua sacola está vazia</EmptyCartTitle>
                        <EmptyCartInfo>adicione itens </EmptyCartInfo>
                    </>
                )}
                <ul>
                    {cartFiltred.map((product, index) => {
                        const filter = cartProducts.filter(
                            (item) => item.id === product.id,
                        );
                        return (
                            <li key={index}>
                                <CartProductCard>
                                    <Frame>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </Frame>
                                    <BodyProductInfo>
                                        <ProductName>
                                            {product.name}
                                        </ProductName>
                                        <Counter>
                                            <AddButton
                                                onClick={() =>
                                                    sendToCart(product)
                                                }
                                            >
                                                +
                                            </AddButton>
                                            <span>{filter.length}</span>
                                            <SubButton
                                                onClick={() =>
                                                    removeToCart(product.id)
                                                }
                                            >
                                                -
                                            </SubButton>
                                        </Counter>
                                    </BodyProductInfo>
                                    <RemoveContainer>
                                        <button
                                            onClick={() =>
                                                removeOneInCart(product.id)
                                            }
                                        >
                                            <FaTrash />
                                        </button>
                                    </RemoveContainer>
                                </CartProductCard>
                            </li>
                        );
                    })}
                </ul>
                {cartFiltred.length > 0 && (
                    <>
                        <Divider />
                        <CartOptions>
                            <CostTotal>
                                <Total>Total:</Total>
                                <Cost>R$ {totalCost.toFixed(2)}</Cost>
                            </CostTotal>
                            <RemoveAllButton onClick={removeAllProducts}>
                                Remover todos
                            </RemoveAllButton>
                        </CartOptions>
                    </>
                )}
            </CartBody>
        </Cart>
    );
};

export default CartSection;

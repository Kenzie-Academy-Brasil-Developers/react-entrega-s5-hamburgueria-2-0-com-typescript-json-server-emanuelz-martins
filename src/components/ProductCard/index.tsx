import { useCart } from '../../context/cart';
import {
    AddButton,
    Card,
    CardInfo,
    Frame,
    Image,
    ProductCategory,
    ProductName,
    ProductPrice,
} from './styles';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        price: string;
        category: string;
        image: string;
        userId?: number;
    };
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { name, price, category, image } = product;
    const { sendToCart } = useCart();

    return (
        <Card>
            <Frame>
                <Image src={image} alt={name} />
            </Frame>
            <CardInfo>
                <ProductName>{name}</ProductName>
                <ProductCategory>{category}</ProductCategory>
                <ProductPrice>{`R$ ${price}`}</ProductPrice>
            </CardInfo>
            <AddButton onClick={() => sendToCart(product)}>Adicionar</AddButton>
        </Card>
    );
};

export default ProductCard;

import { Link } from 'react-router-dom';
import LoginCard from '../../components/LoginCard';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { Frame, Info, InfoCard, Main, Redirect, Title } from './styles';

const Login = () => {
    return (
        <Main>
            <div>
                <Title>
                    Burguer <span>kenzie</span>
                </Title>
                <InfoCard>
                    <Frame>
                        <RiShoppingBag3Line />
                    </Frame>
                    <Info>
                        A vida é como um sanduíche, é preciso recheá-la com os{' '}
                        <span>melhores</span> ingredientes.
                    </Info>
                </InfoCard>
            </div>
            <div>
                <LoginCard />
                <Redirect>
                    <Link to="/register">
                        Crie sua conta para saborear muitas delícias e matar sua
                        fome!
                    </Link>
                </Redirect>
            </div>
        </Main>
    );
};

export default Login;

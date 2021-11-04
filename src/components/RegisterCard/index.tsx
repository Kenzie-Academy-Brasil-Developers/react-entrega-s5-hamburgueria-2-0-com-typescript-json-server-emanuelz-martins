import { useForm } from 'react-hook-form';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/user';
import { SignupData } from '../../interfaces/signup';
import {
    Address,
    Burguer,
    Form,
    Frame,
    Info,
    InfoCard,
    InfoContainer,
    InputField,
    MainContainer,
    Register,
    RegisterButton,
    Title,
    TitleAddress,
} from './styles';

const RegisterCard = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const { signup } = useUser();

    const toSubmit = (user: SignupData) => {
        signup(user, history);
        console.log(user);
        history.push('/');
    };

    return (
        <MainContainer>
            <InfoContainer>
                <Burguer>
                    Burguer <span>kenzie</span>
                </Burguer>
                <InfoCard>
                    <Frame>
                        <RiShoppingBag3Line />
                    </Frame>
                    <Info>
                        A vida é como um sanduíche, é preciso recheá-la com os{' '}
                        <span>melhores</span> ingredientes.
                    </Info>
                </InfoCard>
            </InfoContainer>
            <Register>
                <TitleAddress>
                    <Title>Cadastro</Title>
                    <Address>
                        <Link to="/login">Retornar para o login</Link>
                    </Address>
                </TitleAddress>
                <Form onSubmit={handleSubmit(toSubmit)}>
                    <InputField
                        label="Name"
                        variant="outlined"
                        type="text"
                        {...register('name')}
                    />
                    <InputField
                        label="Email"
                        variant="outlined"
                        type="email"
                        {...register('email')}
                    />
                    <InputField
                        label="Password"
                        variant="outlined"
                        type="password"
                        {...register('password')}
                    />
                    <RegisterButton type="submit">Cadastrar</RegisterButton>
                </Form>
            </Register>
        </MainContainer>
    );
};

export default RegisterCard;

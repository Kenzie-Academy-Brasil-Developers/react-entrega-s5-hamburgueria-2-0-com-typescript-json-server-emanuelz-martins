import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/user';
import { LoginData } from '../../interfaces/login';
import { Form, InputField, LoginButton, LoginContainer, Title } from './styles';

const LoginCard = () => {
    const history = useHistory<History>();
    const { register, handleSubmit } = useForm();
    const { login } = useUser();

    const toSubmit = (credentials: LoginData) => {
        login(credentials, history);
        history.push('/');
    };

    return (
        <LoginContainer>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit(toSubmit)}>
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
                <LoginButton type="submit">Logar</LoginButton>
            </Form>
        </LoginContainer>
    );
};

export default LoginCard;

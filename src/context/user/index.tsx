import { createContext, useContext, useState } from 'react';
import { request } from '../../api';
import { User, UserContextData, UserProps } from '../../interfaces/users';

export const UserContext = createContext<UserContextData>(
    {} as UserContextData,
);

export const UserProvider = ({ children }: UserProps) => {
    const [auth, setAuth] = useState<string>(
        localStorage.getItem('@token') || '',
    );
    const [userName, setUserName] = useState<string>('');

    const login = ({ email, password }: User) => {
        request
            .post('/login', { email, password })
            .then(({ data }) => {
                setAuth(data.accessToken);
                localStorage.setItem('@token', data.accessToken);
                setUserName(data.user.name);
            })
            .catch((error) => console.error('Miss', error));
    };

    const logout = () => {
        localStorage.removeItem('@token');
        localStorage.clear();
        setAuth('');
    };

    const signup = (user: User) => {
        request
            .post(`/users`, user)
            .then((_) => login(user))
            .catch((_) => console.error('Miss'));
    };

    return (
        <UserContext.Provider value={{ auth, userName, signup, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

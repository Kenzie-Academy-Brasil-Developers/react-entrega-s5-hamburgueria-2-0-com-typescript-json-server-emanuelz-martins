import { ReactNode } from 'react';
import { History } from 'history';

export interface User {
    email: string;
    password: string;
    name?: string;
}

export interface UserProps {
    children: ReactNode;
}

export interface UserContextData {
    auth: string;
    userName: string;
    signup: (data: User, history: History) => void;
    login: ({ email, password }: User, history: History) => void;
    logout: () => void;
}

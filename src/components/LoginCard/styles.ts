import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 90vw;
    margin-inline: auto;
    padding: 20px;

    border: 2px solid #f5f5f5;
    box-sizing: border-box;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    @media (min-width: 1024px) {
        margin: 0 2em;
        width: 45vw;
    }
`;

export const Title = styled.h2`
    font-size: 18px;
    color: var(--gray-600);
    margin-bottom: 25px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputField = styled(TextField)`
    margin: 0.25em 0 !important;
    width: 347px !important;

    :focus {
        border: 2px solid var(--primary-color) !important;
    }
`;

export const LoginButton = styled.button`
    width: 347px;
    height: 60px;
    margin-top: 1em;

    background: var(--primary-color);
    border-radius: 8px;

    color: var(--gray-0);
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
`;

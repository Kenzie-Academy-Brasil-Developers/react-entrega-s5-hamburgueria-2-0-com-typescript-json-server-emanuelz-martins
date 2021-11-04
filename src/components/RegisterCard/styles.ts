import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 80vw;
    margin-inline: auto;
    padding: 15px;

    border: 2px solid #f5f5f5;
    box-sizing: border-box;
    border-radius: 5px;

    @media (min-width: 1024px) {
        flex-direction: row;
        margin-top: 13vw;
    }
`;

export const TitleAddress = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Address = styled.address`
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    text-decoration-line: underline;

    a {
        color: var(--gray-300);
    }
`;

export const InfoContainer = styled.div`
    width: 35vw;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Register = styled.div`
    width: 35vw;
`;

export const Title = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-600);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const InputField = styled(TextField)`
    margin: 1em 0 !important;
`;

export const RegisterButton = styled.button`
    height: 60px;
    margin-top: 1em;

    background: var(--primary-color);
    border-radius: 8px;

    color: var(--gray-0);
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
`;

export const Burguer = styled.h1`
    color: var(--title-color);
    font-size: 35px;

    margin: 40px 0 30px 0.5em;

    span {
        color: var(--title-secondary-color);
        font-size: 15px;

        ::before {
            content: '   ';
        }
    }
`;

export const InfoCard = styled.aside`
    display: flex;
    justify-content: space-between;

    margin: 2em 20px;
    padding: 20px;

    background: white;
    border: 1px solid var(--gray-100);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;

export const Frame = styled.picture`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 60px;

    background-color: var(--gray-100);
    border-radius: 5px;

    svg,
    svg path {
        font-size: 25px;
        color: var(--primary-color);
    }
`;

export const Info = styled.p`
    margin: 0 0 0 2em;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: var(--gray-300);

    span {
        color: var(--gray-600);
        font-weight: 600;
    }
`;

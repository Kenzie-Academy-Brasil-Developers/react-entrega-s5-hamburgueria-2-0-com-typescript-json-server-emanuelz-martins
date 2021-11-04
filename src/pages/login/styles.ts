import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        margin: 15vw 0;
    }
`;

export const Title = styled.h1`
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

export const Redirect = styled.address`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    margin: 1em 0;

    a {
        color: var(--gray-50);
    }
`;

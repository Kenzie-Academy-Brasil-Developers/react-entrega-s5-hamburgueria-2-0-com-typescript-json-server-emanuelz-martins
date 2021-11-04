import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid var(--gray-100);
    border-radius: 5px;

    margin: 2em 0;
    width: 300px;
    height: 350px;

    :hover {
        border: 2px solid var(--primary-color);
    }

    @media (min-width: 484px) {
        margin: 2em;
    }
`;

export const Frame = styled.picture`
    display: inline-flex;
    justify-content: center;
    background-color: var(--gray-0);
    width: 100%;
`;

export const Image = styled.img`
    justify-self: center;
    width: 177px;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;

    h3,
    span {
        margin: 0.5em 0;
    }
`;

export const ProductName = styled.h3`
    color: var(--gray-600);
`;

export const ProductCategory = styled.span`
    font-size: 12px;
    color: var(--gray-300);
`;

export const ProductPrice = styled.span`
    font-size: 14px;
    color: var(--primary-color);
`;

export const AddButton = styled.button`
    align-self: flex-start;

    background-color: var(--primary-color);
    border-radius: 8px;

    margin: 1em;
    padding: 1em 20px;

    color: var(--gray-0);
`;

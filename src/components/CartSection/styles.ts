import styled from 'styled-components';

export const Cart = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    padding: 13px 22px;
    width: 375px;
    margin-inline: auto;

    text-align: center;

    position: fixed;
    top: 50;
    right: 0;
    left: 0;
    z-index: 1000;

    @media (max-width: 358px) {
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

        padding: 0;
    }
`;

export const Title = styled.h5`
    font-size: 18px;
    color: var(--gray-0);
`;

export const CartHeader = styled.header`
    display: inline-flex;
    justify-content: space-between;

    padding: 13px 22px;
    background-color: var(--primary-color);
    border-radius: 5px 5px 0px 0px;
`;

export const CloseCart = styled.button`
    color: white;
    font-size: 16px;
`;

export const CartBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-height: 158px;

    background-color: var(--gray-0);
`;

export const EmptyCartTitle = styled.h3`
    color: var(--gray-600);
`;

export const EmptyCartInfo = styled.p`
    color: var(--gray-300);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
`;

export const CartProductCard = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Frame = styled.picture`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 75px;
    height: 75px;

    background-color: var(--gray-100);
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 55px;
`;

export const BodyProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 4rem;
`;

export const ProductName = styled.h3`
    color: var(--gray-600);
    text-align: left;
`;

export const Counter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 22px;
`;

export const AddButton = styled.button`
    background-color: var(--gray-6);
    color: var(--secondary-color);
    font-size: 22px;
`;

export const SubButton = styled.button`
    background-color: var(--gray-6);
    color: var(--secondary-color);
    font-size: 22px;
`;

export const RemoveContainer = styled.div`
    margin: 0.55em 0;

    svg,
    svg path {
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        color: var(--gray-4);
    }
`;

export const Divider = styled.hr`
    margin: 0 10px 0.85em 23px;
`;

export const CartOptions = styled.section`
    display: flex;
    flex-direction: column;
`;

export const CostTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 23px;
`;

export const Total = styled.span`
    color: var(--gray-600);
    font-size: 14px;
`;

export const Cost = styled.span`
    color: var(--gray-300);
    font-size: 14px;
    font-weight: 600;
`;

export const RemoveAllButton = styled.button`
    width: 22em;
    height: 60px;
    margin: 1em auto;
    padding: 0 20px;

    background: var(--gray-100);
    border: 2px solid var(--gray-100);
    border-radius: 8px;

    color: var(--gray-300);
`;

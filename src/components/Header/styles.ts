import styled from 'styled-components';

interface HeaderFieldProps {
    justify: boolean | any;
}

export const HeaderField = styled.header<HeaderFieldProps>`
    display: flex;
    justify-content: ${(props) => (props.justify ? 'center' : 'space-between')};
    align-items: center;

    background-color: var(--gray-0);

    width: 100%;
    height: 80px;
    padding: 5px 15px;
`;

export const SearchField = styled.div`
    display: flex;
    width: 70%;
    height: 70%;
`;

export const ReesponsiveSearchField = styled(SearchField)`
    width: 50%;
    height: 50%;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Search = styled.input`
    flex-grow: 2;
    padding: 5px;
    border: 1px solid var(--gray-4);
    border-right: none;
    border-radius: 10px 0 0 10px;
`;

export const ResponsiveSearch = styled(Search)`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchButton = styled.button`
    background-color: var(--primary-color);
    border: 1px solid var(--gray-4);
    border-left: none;
    border-radius: 0 10px 10px 0;

    color: var(--gray-0);
    padding: 5px 15px;

    svg,
    svg path {
        color: var(--gray-0);
    }
`;

export const Title = styled.h1`
    color: var(--title-color);
    font-size: 26px;

    span {
        color: var(--title-secondary-color);
        font-size: 15px;

        ::before {
            content: '   ';
        }
    }
`;

export const Options = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    width: 40%;

    @media (min-width: 768px) {
        width: 70%;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 7em;

    svg,
    svg path {
        font-size: 23px;
        color: var(--gray-4);
    }
`;

export const ToInput = styled.button`
    @media (min-width: 768px) {
        display: none;
    }
`;

export const CartButton = styled.button`
    span {
        background-color: var(--primary-color);
        border-radius: 15px;

        font-weight: 700;
        color: var(--gray-0);

        padding: 3px;
    }
`;

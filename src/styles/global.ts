import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    img {
        object-fit: cover;
        width: 200px;
    }

    button {
        border: none;
        background: none;
        
        :hover {
            cursor: pointer;
        }
    }

    button, input {
        :focus {
            outline: none;
        }
    }

    ul, li {
        list-style: none;
    }

    :root {
        --title-color: #333333;
        --title-secondary-color: #EB5757;

        --primary-color: #27AE60;
        --secondary-color: #EB5757;

        --gray-600: #333333;
        --gray-300: #828282;
        --gray-100: #E0E0E0;
        --gray-50: #999999;
        --gray-6: #F2F2F2;
        --gray-4: #BDBDBD;
        --gray-0: #F5F5F5;

        --feedback-negative: #E60000;
        --feedback-warning: #FFCD07;
        --feedback-sucess: #168821;
        --feedback-info: #155BCB;
    }
`;

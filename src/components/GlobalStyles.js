import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #e42727;
        }
        &::-webkit-scrollbar-track{
            background-color: #242323;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        color: white;
        background: #2b2a2a;
    }
    
`;

export default GlobalStyle;

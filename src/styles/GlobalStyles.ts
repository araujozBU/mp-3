import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Lato", Arial, sans-serif;
        background-color: #e8edf2;
        font-size: calc(16px + 0.3vw);
    }

    h1 { font-size: calc(28px + 1vw); }
    h2 { font-size: calc(22px + 0.6vw); }
    h3 { font-size: calc(18px + 0.4vw); }

    a {
        text-decoration: none;
        color: #245780;
    }
`;

export default GlobalStyles;

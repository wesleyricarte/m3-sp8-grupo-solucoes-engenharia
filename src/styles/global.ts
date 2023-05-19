import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Yantramanav", sans-serif;
    }
    
    *::-webkit-scrollbar {
        display: none;
    }
    
    body {
        width: 100%;
        height: 100vh;
        background-color: var(--color-white);
        padding-bottom: 2rem;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: transparent;
        transition: 0.2s;
    }

    a {
        color: unset;
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    :root {
        /* Project colors*/
        --color-primary: #236EDF;
        --color-secundary: #165FCD;
        
        /* B&W colors */
        --color-white: #FFFFFF;
        --color-black: #000000;

        /* Grey scale colors */
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;

        /* Warning colors */
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;

        /* Toastfy colors */
        --toastify-color-success: #168821;
        --toastify-color-error: #E60000;
        --toastify-font-family: "Yantramanav", sans-serif;
    }
`;

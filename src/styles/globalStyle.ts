import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style-type: none;
            text-decoration: none;
            font-Family: "Roboto", sans-serif;
        }

        a,a:hover, ul, li, button{
            all: unset;
        }

        main{
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
        }

        section{
            width: 100%;
	        height: calc(100vh - 100px - 60px);
            overflow:auto;
            background-color:#dddddd;
        }

        img{
            max-width: 100%;
            height: auto;
        }
`;

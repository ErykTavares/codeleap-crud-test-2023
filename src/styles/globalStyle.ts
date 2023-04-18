import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

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

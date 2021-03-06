import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
        margin:0;
        padding:0;
		box-sizing:border-box;
		font-family: 'Raleway', sans-serif;
	}

    a{
		text-decoration: none;
	}
    
    button{
        all: unset;

        width: 100px;
        height: 50px;

        font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: white;

        border-radius: 40px;

        background-color: #FB5607;

        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`  
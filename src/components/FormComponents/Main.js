import styled from "styled-components";

const Main = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    div.fixed {
        width: 100%;
        position: fixed;
    }

    .div-cart {
        width: 400px;
        height: 100vh;
        
        position: fixed;
        right: 0;
        z-index: 2;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: white;
        border-radius: none;

        .title-cart {
            width: 100%;
            height: 70px;

            background-color: black;
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            font-size: 20px;
            font-weight: bold;
            color: white;
        }

        button {
            width: 250px;

            margin-top: 25px;
            background-color: #3A86FF;
        }
    }

    .div-overlay {
        width: 100%;
        height: 100vh;

        position: fixed;
        top: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5)
    }

`;

export default Main;
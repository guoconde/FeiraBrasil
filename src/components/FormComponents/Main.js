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

        background-color: white;
        border-radius: none;
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
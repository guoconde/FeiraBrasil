import styled from "styled-components";

export const ProductMount = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-bottom: 2px solid lightgrey;

    .delete {
        margin-top: -25px;
        align-self: flex-end;
    }

    img {
        width: 150px;
    }

    >div{
        width: 150px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`

export const DivCart = styled.div `
width: 400px;
    height: 100vh;
    
    position: fixed;
    right: 0;
    top: 0;
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

` 

export const DivOverlay = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`
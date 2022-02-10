import styled from "styled-components";

export const Icon = styled.div`
    height:75px;
    width:75px;
    border-radius:50%;
    background:#eee;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Container = styled.div`
    height:100%;
`
export const PurchaseComplete = styled.div`
    margin: 100px auto;
    background: #FFBE0B;
    width:30%;
    padding:50px;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:35px;
    h2{
        text-align:center;
    }
`
export const BackButton = styled.button`
    font-size:18px;
    padding: 15px;
    background:#eee;
    border:0;
    border-radius: 30px;
    width:300px;
`
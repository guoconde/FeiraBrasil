import styled from "styled-components";

export const StagesElement = styled.nav`
    display:flex;
    height:50px;
    margin-bottom:30px;
`
export const Stage = styled.div`
    background: ${ ({active}) => active ? "#FFBE0B" : "#FFBE0B80"};
    width:33%;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Number = styled.span`
    height: 35px;
    width: 35px;
    margin-right:20px;
    
    display:flex;
    align-items:center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    border-radius:50%;
    background: #666;
`
export const Desc = styled.span`
    color: #666;
    font-weight: bold;
`
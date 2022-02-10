import styled from "styled-components";

export const Container = styled.div`
    >*{
        width: 60%;
        margin: auto;
    }
    min-height:calc(100vh - 100px);
    padding-top:30px;
    background:#eee;
    
    
`
export const CartContainer = styled.div`
    display:flex;
    flex-direction:column;

    background:#FFBE0B80;
`
export const Header = styled.header`
    height: 100px;
    background: #FFBE0B;
    
`
export const Logo = styled.div`
    display:flex;
    align-items:center;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
    height: 100%;

    color: #000000;
`
export const Stages = styled.nav`
    display:flex;
    background-opacity:0.5;

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
export const CartHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight: bold;
    font-size:14px;
    height:60px;
    padding: 0 20px;
    p{
        :first-child{
            width:45%;
        }
        :last-child{
            width:55%;
        }
    }
    background:#FFBE0B;
`
export const Infos = styled.div`
    display:flex;
    font-weight: bold;
    font-size:12px;
    padding: 20px 20px;
    >p{
        width:55%;
    }
    div{
        width:45%;
        display:flex;
        justify-content:space-between;
        p{
            text-align:center;
            flex:2;
            :last-child{
                flex:1;
            }
        }
    }
`
export const CartProducts = styled.ul`
    background:#fff;
    height:100%;
    padding: 30px 20px;
    display:flex;
    flex-direction:column;
    gap: 15px;
`
export const Product = styled.li`
    display:flex;
    border-bottom: 2px solid #eee;
    :last-child{
        border-bottom: 0;
    }
`
export const Info = styled.div`
    width:55%;
    display:flex;
`
export const Img = styled.img`
    height:125px;
    width:125px;
    margin-right:20px;
`
export const ProductDesc = styled.div`
    h2{
        font-size:15px;
    }

`
export const Values = styled.div`
    display:flex;
    justify-content:space-between;
    width:45%;
`
export const Quantity = styled.div`
    display:flex;
    text-align:center;
    flex:2;
    margin:auto;
    input{
        border:1px solid #eee;
        width: 80%;
        margin: 0 auto;
        text-align:center;
    }
`
export const Unitary = styled.div`
margin:auto;
text-align:center;
    flex:2;
`
export const Value = styled.div`
margin:auto;
text-align:center;
    flex:2;
`
export const Total = styled.div`
margin:auto;
text-align:center;
    flex:2;
`
export const Delete = styled.button`
    all:unset;
    margin:auto;
    text-align:center;
    flex:1;
    cursor:pointer;

`
export const Continue = styled.div`
    height:80px;
    background: #FF5607;
    display: flex;
    justify-content:space-around;
    align-items:center;
`
export const FinalValue = styled.h2`
    

`
export const ContinueButton = styled.button`
font-size:18px;
    width:250px;
    height: 75%;
    background:#eee;
    border:0;
    border-radius: 30px;
`
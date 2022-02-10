import styled from "styled-components";

export const PaymentArea = styled.div`
    display:flex;
    gap:5px;
`
export const PaymentSection = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px 15px;
    background:#fff;
    height:100%;
    opacity: ${ ({active}) => active ? 1 : .4};
`
export const SectionTitle = styled.h2`
    font-size:18px;
    margin-bottom: 15px;
    display:flex;
    align-items:center;
    gap:15px;
`
export const Img = styled.img`
    height:75px;
    width:75px;
    margin-right:20px;
`
export const ProductDesc = styled.div`
    h2{
        font-size:15px;
    }

`
export const Info = styled.div`
    display:flex;
    align-items:flex-start;
    padding-bottom:10px;
    margin-bottom:15px;
    border-bottom: 1px solid #ccc;
`
export const Total = styled.div`
    display:flex;
    justify-content:space-between;
`
export const UserData = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        font-size:13px;
        color: #fa5400;
        padding-bottom: 10px;
        margin-bottom:25px;
        border-bottom: 1px solid #ccc;
    }
    h6{
        font-size:12px;
        margin-bottom:5px;
    }
    p{
        font-size:13px;
        margin-bottom:5px;  
    }
`
export const UserAdress = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:30px;
    h3{
        font-size:13px;
        color: #fa5400;
        padding-bottom: 10px;
        margin-bottom:25px;
        border-bottom: 1px solid #ccc;
    }
`
export const DeliverType = styled.div`
    display:flex;
    flex-direction:column;
    margin:30px 0;
    h3{
        font-size:13px;
        color: #fa5400;
        padding-bottom: 10px;
        margin-bottom:25px;
        border-bottom: 1px solid #ccc;
    }
`
export const Options = styled.div`
    display:flex;
    gap:10px;
`
export const ContinueButton = styled.button`
    font-size:18px;
    padding: 15px;
    background:#eee;
    border:0;
    border-radius: 30px;
`
export const PaymentForm = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        font-size:13px;
        color: #fa5400;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
`
export const OptionArea = styled.div`
    display:flex;
    margin-bottom:30px;
`
export const PaymentOptions = styled.div`
    display:flex;
    flex-direction:column;
    flex:2;
`
export const PaymentOption = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid #ccc;
    border-top:0;
    font-size:10px;
    padding:3px;
    cursor:pointer;
`

export const PaymentInfo = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px 0 0 10px;
    flex:6;
`

export const CreditCard = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    padding-top:15px;
    input{
        outline:0;
        padding:3px;
    }
`
export const BankSlip = styled.ul`
    padding-left: 15px;
    font-size:12px;
    display:flex;
    flex-direction:column;
    gap:5px;
`

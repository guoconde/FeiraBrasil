import styled from "styled-components";

export const HistoricContainer = styled.div`
    margin:auto;
    h2{
        margin-top: 50px;
        text-align:center;
    }
    width:60%;
`
export const HistoricTable = styled.div`
    display:flex;
    flex-direction:column;
    margin: 100px 0;
`
export const HistoricInfos = styled.div`
    display:flex;
    align-items:center;
    height:60px;
    background:#eee;
    font-weight:bold;
    div{
        flex:1;
        text-align:center;
    }
`
export const Purchase = styled.div`
    display:flex;
    align-items:center;
    height:60px;
    
    span{
        border:2px solid #eee;
        height:100%;
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        word-break:break-word;
    }
`
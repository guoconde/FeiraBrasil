import { Desc, Number, Stage, StagesElement } from "./styles";

export default function Stages({number}){
    return(
        <StagesElement>
            <Stage active={number === 1} >
                <Number>1</Number>
                <Desc>REVISE SEU CARRINHO</Desc>
            </Stage>
            <Stage active={number === 2}>
                <Number>2</Number>
                <Desc>IDENTIFICAÇÃO</Desc>
            </Stage>
            <Stage active={number === 3}>
                <Number>3</Number>
                <Desc>PAGAMENTO</Desc>
            </Stage>
        </StagesElement>
    )
}
import HeaderComplete from "../Header";
import { BackButton, Icon, PurchaseComplete } from "./style";
import { Checkmark  } from "react-ionicons";
import { useNavigate } from "react-router";

export default function Sucess(){
    const navigate = useNavigate()

    return(
        <>
            <HeaderComplete></HeaderComplete>
            <PurchaseComplete>
                <Icon>
                    <Checkmark
                        height="50px"
                        width="50px"
                        color="#0f0"
                    />
                </Icon>
                <h2>Compra realizada com sucesso</h2>
                <BackButton onClick={()=>navigate("/historico")}>Verificar histórico de compras</BackButton>
                <BackButton onClick={()=>navigate("/")}>Voltar para a página inicial</BackButton>
            </PurchaseComplete>
        </>
    )
}
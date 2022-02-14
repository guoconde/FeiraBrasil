import HeaderComplete from "../Header";
import { BackButton, Icon, PurchaseComplete } from "./style";
import { Checkmark  } from "react-ionicons";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";

export default function Sucess(){
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    let headers = ""
    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session) headers = { headers: { Authorization: `Bearer ${session.token}` }}

    useEffect(() => {
        async function handleEmail() {
            try {
                await api.send.senfEmail( session, headers)
            } catch (error) {
                console.log(error)
            }
        }

        handleEmail()
        // eslint-disable-next-line
    }, [])

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
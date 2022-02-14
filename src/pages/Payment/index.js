import { Container } from "../Cart/style";
import { PaymentArea, PaymentSection, SectionTitle, Total, InfoButton } from "./style";
import { Checkmark } from "react-ionicons"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";
import { useNavigate } from "react-router";
import HeaderComplete from "../Header";
import Stages from "../../components/Stages";
import Info from "./components/Info";
import UserInfos from "./components/UserInfos";
import PaymentForm from "./components/PaymentForm";
import getHeaders from "../../utils/headers";

export default function Payment() {
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { cart } = useContext(CartContext)
    const [userInfo, setUserInfo] = useState(null)
    const [stage, setStage] = useState("infos")
    const headers = getHeaders(user, session)
    
    useEffect(()=>{
        async function getUserInfo(){
            
            try {
                const res = await api.user.infoUser(headers)
                setUserInfo(res.data)
            } catch (error) {
            console.log(error.response)
            }
        }
        getUserInfo()
        //eslint-disable-next-line
    },[])

    return(
        <>
            <HeaderComplete/>

            <Container>
                <Stages number={stage === "infos" ? 2 : 3}/>
                <PaymentArea>

                    <PaymentSection active={true}>
                        <SectionTitle>SEU CARRINHO<Checkmark/></SectionTitle>
                        {cart.products.map((product,i)=> <Info product={product} i={i}/> )}
                        <Total><span>Total a pagar</span><span>R${(cart.total / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></Total>
                    </PaymentSection>

                    <PaymentSection active={stage === "infos" ? true : false}>
                        <SectionTitle>IDENTIFICAÇÃO</SectionTitle>
                        {userInfo?.info
                            ?   <UserInfos userInfo={userInfo} setStage={setStage}/>
                            :   <>
                                    <p>Você ainda não atualizou suas informações</p>
                                    <InfoButton onClick={()=>navigate("/informacoes")}>Atualizar informações</InfoButton>
                                </>
                        }
                    </PaymentSection>

                    <PaymentSection active={stage === "payment" ? true : false}>
                        <SectionTitle>PAGAMENTO</SectionTitle>
                        <PaymentForm/>
                    </PaymentSection>
                </PaymentArea>
            </Container>
        </>
    )
}
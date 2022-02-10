import { Container, Desc, Header, Logo, Number, Stage, Stages } from "../Cart/style";
import LogoImg from "../../img/image 21.svg"
import { PaymentArea, ContinueButton, PaymentSection, SectionTitle, Img, ProductDesc, Info, Total, UserData, UserAdress, DeliverType, Options } from "./style";
import { Checkmark } from "react-ionicons"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";
import { useNavigate } from "react-router";

export default function Payment() {
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { cart } = useContext(CartContext)
    const api = useApi()
    const [userInfo, setUserInfo] = useState(null)
    let headers = ""
    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session) headers = { headers: { Authorization: `Bearer ${session.token}` }}
    const navigate = useNavigate()

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
            <Header>
                <Logo>
                    <img src={LogoImg} alt="Logo"/>
                    FeiraBrasil
                </Logo>
            </Header>

            <Container>
                <Stages>
                    <Stage>
                        <Number>1</Number>
                        <Desc>REVISE SEU CARRINHO</Desc>
                    </Stage>
                    <Stage active={true}>
                        <Number>2</Number>
                        <Desc>IDENTIFICAÇÃO</Desc>
                    </Stage>
                    <Stage>
                        <Number>3</Number>
                        <Desc>PAGAMENTO</Desc>
                    </Stage>
                </Stages>
                <PaymentArea>
                    <PaymentSection>
                        <SectionTitle>SEU CARRINHO<Checkmark/></SectionTitle>
                        {
                            cart.products.map((product,i)=>
                                
                                <Info key={i}>
                                    <Img src={product.img}/>
                                    <ProductDesc>
                                            <h2>{product.name}</h2>
                                            <div><span>{product.type}</span><br/><span>{product.origin}</span></div>
                                            <h3>1{product.und}</h3>
                                            <div><span>{product.price}</span> - <span>{product.quantity} unidades</span></div>
                                    </ProductDesc>
                                </Info>
                                
                            )
                        }
                        <Total><span>Total a pagar</span><span>R${cart.total}</span></Total>
                    </PaymentSection>
                    <PaymentSection>
                        <SectionTitle>IDENTIFICAÇÃO</SectionTitle>
                        {userInfo?.info
                            ?   <>
                                    <UserData>
                                        <h3>DADOS</h3>
                                        <h6>Nome</h6>
                                        <p>{userInfo.username}</p>
                                        <h6>E-mail</h6>
                                        <p>{userInfo.email}</p>
                                        <h6>cpf</h6>
                                        <p>{userInfo.info.cpf}</p>
                                        <h6>CEP</h6>
                                        <p>{userInfo.info.cep}</p>
                                    </UserData>
                                    <UserAdress>
                                        <h3>ENDEREÇO DE ENTREGA</h3>
                                        <Options>
                                            <input id="adress" type="radio"></input>
                                            <label htmlFor="adress">{userInfo.info.adress}</label>
                                        </Options>
                                    </UserAdress>
                                    <DeliverType>
                                        <h3>ESCOLHA O TIPO DE ENTREGA</h3>
                                        <Options>
                                            <input id="deliver" type="radio"></input>
                                            <label htmlFor="deliver">Normal - 1 dia útil (Frete Grátis)</label>
                                        </Options>
                                    </DeliverType>
                                    <ContinueButton onClick={()=>alert("oi")}>Seguir para o pagamento</ContinueButton>
                                </>
                            :   <>
                                    <p>Você ainda não atualizou suas informações</p>
                                    <button onClick={()=>navigate("/informacoes")}>Atualizar informações</button>
                                </>
                        }
                    </PaymentSection>
                    <PaymentSection>
                        
                    </PaymentSection>
                </PaymentArea>
            </Container>
        </>
    )
}
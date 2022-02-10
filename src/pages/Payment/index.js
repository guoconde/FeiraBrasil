import { Container, Desc, Header, Logo, Number, Stage, Stages } from "../Cart/style";
import LogoImg from "../../img/image 21.svg"
import { PaymentArea, ContinueButton, PaymentSection, SectionTitle, Img, ProductDesc, Info, Total, UserData, UserAdress, DeliverType, Options, PaymentForm, OptionArea, PaymentOptions, PaymentOption, PaymentInfo, CreditCard, BankSlip } from "./style";
import { Barcode, Card, Checkmark } from "react-ionicons"
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
    const [chosenPayment, setChosenPayment] = useState("credit card")
    const [stage, setStage] = useState("infos")
    const [creditCardForm, setCreditCardForm] = useState({number:"", name:"", month:"Mês", year:"Ano", cvv:"", installment:""})

    function handleChange(e) {
        setCreditCardForm({ ...creditCardForm, [e.target.id]: e.target.value });
    }

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

    async function confirmPurchase(){
        let data
        if(chosenPayment === "credit card") data = creditCardForm
        else data = "bank slip"

        try {
            const res = await api.cart.confirmPurchase({purchaseInfo:data, products:cart}, headers)
            console.log(res.data)
        } catch (error) {
        console.log(error.response)
        }
    }

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
                    <Stage active={stage === "infos" ? true : false}>
                        <Number>2</Number>
                        <Desc>IDENTIFICAÇÃO</Desc>
                    </Stage>
                    <Stage active={stage === "payment" ? true : false}>
                        <Number>3</Number>
                        <Desc>PAGAMENTO</Desc>
                    </Stage>
                </Stages>
                <PaymentArea>
                    <PaymentSection active={true}>
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
                    <PaymentSection active={stage === "infos" ? true : false}>
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
                                    <ContinueButton onClick={()=>setStage("payment")}>Seguir para o pagamento</ContinueButton>
                                </>
                            :   <>
                                    <p>Você ainda não atualizou suas informações</p>
                                    <button onClick={()=>navigate("/informacoes")}>Atualizar informações</button>
                                </>
                        }
                    </PaymentSection>
                    <PaymentSection active={stage === "payment" ? true : false}>
                    <SectionTitle>PAGAMENTO</SectionTitle>
                        <PaymentForm>
                            <h3>ESCOLHA COMO PAGAR</h3>
                            <OptionArea>
                                <PaymentOptions>
                                    <PaymentOption onClick={()=>setChosenPayment("credit card")}>
                                        <Card/>
                                        CARTÃO DE CRÉDITO
                                    </PaymentOption>
                                    <PaymentOption onClick={()=>setChosenPayment("bank slip")}>
                                        <Barcode/>
                                        BOLETO BANCÁRIO
                                    </PaymentOption>
                                </PaymentOptions>
                                <PaymentInfo>
                                    {chosenPayment === "credit card"
                                    ?   <CreditCard>
                                            <input 
                                                type="text" 
                                                placeholder="0000 0000 0000 0000"
                                                id="number"
                                                onChange={handleChange}
                                                value={creditCardForm.number}
                                            />
                                            <input 
                                                type="text" 
                                                placeholder="Nome impresso no cartão"
                                                id="name"
                                                onChange={handleChange}
                                                value={creditCardForm.name}
                                            />
                                            <select
                                                id="month"
                                                onChange={handleChange}
                                                value={creditCardForm.month}
                                            >
                                                <option>Mês</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                                <option>06</option>
                                                <option>07</option>
                                                <option>08</option>
                                                <option>09</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </select>
                                            <select
                                                id="year"
                                                onChange={handleChange}
                                                value={creditCardForm.year}
                                            >
                                                <option>Ano</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                                <option>31</option>
                                                <option>32</option>
                                                <option>33</option>
                                            </select>
                                            <input 
                                                type="text" 
                                                placeholder="CVV"
                                                id="cvv"
                                                onChange={handleChange}
                                                value={creditCardForm.cvv}
                                            />   
                                            <select
                                                id="installment"
                                                onChange={handleChange}
                                                value={creditCardForm.installment}
                                            >
                                                <option>Parcelamento</option>
                                                <option>1 vez - Sem juros</option>
                                                <option>2 vezes - Sem juros</option>
                                                <option>3 vezes - Sem juros</option>
                                            </select>   
                                        </CreditCard>
                                    :   <BankSlip>
                                            <li>Data de vencimento: verifique a data de vencimento do boleto, que é de 3 dias úteis após ser gerado. Caso não seja pago até a data informada, o pedido será automaticamente cancelado.</li>
                                            <li>Prazo de entrega: é contado a partir da confirmação de pagamento pelo banco, o que pode levar até 2 dias úteis.</li>
                                        </BankSlip>
                                    }
                                </PaymentInfo>
                            </OptionArea>
                            <ContinueButton onClick={confirmPurchase}>Confirmar Pagamento</ContinueButton>
                        </PaymentForm>
                    </PaymentSection>
                </PaymentArea>
            </Container>
        </>
    )
}
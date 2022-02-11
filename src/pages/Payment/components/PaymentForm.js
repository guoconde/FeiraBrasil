import { useContext, useState } from "react";
import { Barcode, Card } from "react-ionicons";
import { useNavigate } from "react-router";
import { CartContext } from "../../../context/cart";
import { SessionContext } from "../../../context/session";
import { UserContext } from "../../../context/user";
import useApi from "../../../hooks/useApi";
import getHeaders from "../../../utils/headers";
import { BankSlip, ContinueButton, CreditCard, OptionArea, PaymentFormElement, PaymentInfo, PaymentOption, PaymentOptions } from "../style";

export default function PaymentForm(){
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { cart } = useContext(CartContext)
    const [chosenPayment, setChosenPayment] = useState("credit card")
    const [creditCardForm, setCreditCardForm] = useState({number:"", name:"", month:"Mês", year:"Ano", cvv:"", installment:""})
    const headers = getHeaders(user, session)
    
    function handleChange(e) {
        setCreditCardForm({ ...creditCardForm, [e.target.id]: e.target.value });
    }

    async function confirmPurchase(){
        let data
        if(chosenPayment === "credit card") data = creditCardForm
        else data = "bank slip"

        try {
            await api.cart.confirmPurchase({purchaseInfo:data, products:cart}, headers)
            navigate("/sucesso")
        } catch (error) {
            console.log(error.response)
        }
    }

    return(
        <PaymentFormElement>
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
        </PaymentFormElement>
    )
}
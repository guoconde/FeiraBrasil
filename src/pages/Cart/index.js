import { CartContainer, CartHeader, Container, Continue, ContinueButton, FinalValue, NoProducts, Return } from "./style";
import { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/cart";
import HeaderComplete from "../Header";
import Products from "./components/Products";
import Stages from "../../components/Stages";
import getHeaders from "../../utils/headers";

export default function Cart() {
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { setCart } = useContext(CartContext)
    const [cartProducts, setCartProducts] = useState([])
    const [productQuantity, setProductsQuantity] = useState([])
    const [total, setTotal] = useState(0)
    const [reload, setReload] = useState(false)
    const headers = getHeaders(user, session)

    useEffect(() => {
        async function getData() {

            try {
                const res = await api.cart.getCart(headers)
                setCartProducts(res.data.cart)
                setProductsQuantity(res.data.cart.map(product => product.qtd))
                setReload(false)
            } catch (error) {
                console.log(error.response)
            }
        }
        getData()
        //eslint-disable-next-line
    }, [reload])

    useEffect(() => {
        let soma = 0
        let i = 0
        for (const product of cartProducts) {
            soma += parseFloat(product.price) * productQuantity[i]
            i++
        }

        setTotal(soma)
        //eslint-disable-next-line
    }, [productQuantity])

    function continueCheckout() {
        const products = cartProducts.map((product, i) => { return { ...product, quantity: productQuantity[i] } })
        setCart({ products, total })
        navigate("/pagamento")
    }

    return (
        <>
            <HeaderComplete />

            <Container>
                <Stages number={1} />

                <CartContainer>

                    <CartHeader>
                        <Return onClick={() => navigate("/")}>CONTINUAR COMPRANDO</Return>
                        <p>MEU CARRINHO({cartProducts.length})</p>
                    </CartHeader>

                    {cartProducts.length
                        ? <Products cartProducts={cartProducts} productQuantity={productQuantity} setProductsQuantity={setProductsQuantity} setReload={setReload} />
                        : <NoProducts>Você ainda não colocou nenhum produto no carrinho!</NoProducts>
                    }

                    <Continue>
                        <FinalValue>
                            Total da compra: R$ {(total / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </FinalValue>
                        <ContinueButton disabled={cartProducts.length > 0 ? false : true} onClick={continueCheckout}>Continuar</ContinueButton>
                    </Continue>

                </CartContainer>

            </Container>
        </>
    )
}
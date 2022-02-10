import { CartContainer, CartHeader, CartProducts, Container, Continue, ContinueButton, Delete, Desc, FinalValue, Img, Info, Infos, NoProducts, Number, Product, ProductDesc, Quantity, Return, Stage, Stages, Total, Unitary, Values } from "./style";
import { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/cart";
import HeaderComplete from "../Header";
import { fireConfirm } from "../../utils/alerts";

export default function Cart(){
    const api = useApi()
    const [cartProducts, setCartProducts] = useState([])
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { setCart } = useContext(CartContext)
    const [ productQuantity, setProductsQuantity] = useState([])
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const[reload, setReload] = useState(false)
    let headers = ""
    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session)headers = { headers: { Authorization: `Bearer ${session.token}` }}

    useEffect( () => {

        async function getData(){
            
            try {
                const res = await api.cart.getCart(headers)
                console.log(res.data)
                setCartProducts(res.data)
                setProductsQuantity(new Array(res.data.length).fill(1))
                setReload(false)
            } catch (error) {
                console.log(error.response)
            }
        }
        getData()
        //eslint-disable-next-line
    }, [reload])

    useEffect(()=>{
       
        let soma = 0
        let i = 0
        for(const product of cartProducts){
            soma += parseFloat(product.price) * productQuantity[i]
            i++
        }
        
        setTotal(soma)
        //eslint-disable-next-line
    }, [productQuantity])
    
    function changeQuantity(e,i){
        const value = e.target.value
        const newarr = productQuantity
        
        newarr[i] = parseInt(value)
        setProductsQuantity([...newarr])
    }
    
    async function deleteItem(id){
        const res = await fireConfirm()
        if(res.isConfirmed){
            await api.cart.deleteProduct(headers, id)
            setReload(true)
        }
    }
    
    function continueCheckout(){
        const products = cartProducts.map( (product, i) =>{ return{...product, quantity:productQuantity[i]}})
        setCart({products, total})
        navigate("/pagamento")
    }
    
    return(
        <>
            <HeaderComplete/>

            <Container>
                <Stages>
                    <Stage active={true} >
                        <Number>1</Number>
                        <Desc>REVISE SEU CARRINHO</Desc>
                    </Stage>
                    <Stage>
                        <Number>2</Number>
                        <Desc>IDENTIFICAÇÃO</Desc>
                    </Stage>
                    <Stage>
                        <Number>3</Number>
                        <Desc>PAGAMENTO</Desc>
                    </Stage>
                </Stages>

                <CartContainer>
                    <CartHeader>
                        <Return onClick={()=>navigate("/")}>CONTINUAR COMPRANDO</Return>
                        <p>MEU CARRINHO({cartProducts.length})</p>
                    </CartHeader>
                    {cartProducts.length
                    ?   <>
                            <Infos>
                                <p>PRODUTOS</p>
                                <div>
                                    <p>QUANTIDADE</p>
                                    <p>VALOR UNITÁRIO</p>
                                    <p>VALOR TOTAL</p>
                                    <p>&nbsp;</p>
                                </div>
                            </Infos>
                            <CartProducts>
                                {cartProducts.map((product, i) => 
                                        <Product key={i}>
                                            <Info>
                                                <Img src={product.img}></Img>
                                                <ProductDesc>
                                                    <h2>{product.name}</h2>
                                                    <div><span>{product.type}</span><br/><span>{product.origin}</span></div>
                                                    <h3>1{product.und}</h3>
                                                </ProductDesc>
                                            </Info>
                                            <Values>
                                                <Quantity>
                                                    <input type="number" min={1} value={productQuantity[i] ? productQuantity[i]: 1} onChange={e=>{changeQuantity(e,i)}}></input>
                                                </Quantity>
                                                <Unitary>
                                                    {product.price}
                                                </Unitary>
                                                <Total>
                                                    {(parseFloat(product.price) * productQuantity[i]).toString()}
                                                </Total>
                                                <Delete onClick={()=>deleteItem(product._id)}>
                                                    x
                                                </Delete>
                                            </Values>
                                        </Product>
                                    )}
                            </CartProducts>
                        </>
                    :   <NoProducts>Você ainda não colocou nenhum produto no carrinho!</NoProducts>
                    }
                    <Continue>
                        <FinalValue>
                            Total da compra: R$ {total}
                        </FinalValue>
                        <ContinueButton disabled={cartProducts.length > 0 ? false : true} onClick={continueCheckout}>Continuar</ContinueButton>
                    </Continue>
                </CartContainer>
            </Container>
        </>
    )
}
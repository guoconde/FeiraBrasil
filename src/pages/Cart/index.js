import { CartContainer, CartHeader, CartProducts, Container, Continue, ContinueButton, Delete, Desc, FinalValue, Header, Img, Info, Infos, Logo, Number, Product, ProductDesc, Quantity, Stage, Stages, Total, Unitary, Values } from "./style";
import LogoImg from "../../img/image 21.svg"
import { useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/cart";

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
        await api.cart.deleteProduct(headers, id)
        setReload(true)
    }
    
    function continueCheckout(){
        const products = cartProducts.map( (product, i) =>{ return{...product, quantity:productQuantity[i]}})
        setCart({products, total})
        navigate("/pagamento")
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
                        <p>CONTINUAR COMPRANDO</p>
                        <p>MEU CARRINHO({cartProducts.length})</p>
                    </CartHeader>
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
                        {
                            cartProducts.map((product, i) => 
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
                            )
                        }
                    </CartProducts>
                    <Continue>
                        <FinalValue>
                            Total da compra: R$ {total}
                        </FinalValue>
                        <ContinueButton onClick={continueCheckout}>Continuar</ContinueButton>
                    </Continue>
                </CartContainer>
            </Container>
        </>
    )
}
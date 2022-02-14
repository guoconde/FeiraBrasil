import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useCart } from "../../context/CartMount"
import { useOpen } from "../../context/openCart"
import { SessionContext } from "../../context/session"
import { UserContext } from "../../context/user"
import useApi from "../../hooks/useApi"
import { fireAlert } from "../../utils/alerts"

export default function CartMount() {

    const api = useApi()
    const { cart } = useCart()
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { openCart, setOpen } = useOpen(false)

    let headers = ""

    if (user) headers = { headers: { Authorization: `Bearer ${user.token}` } }
    else if (session) headers = { headers: { Authorization: `Bearer ${session.token}` } }

    async function handleCart() {

        if(headers === '') {
            fireAlert('Para continuar você precisa estar logado!')
            return
        } 

        setOpen(false)
        navigate('/carrinho')

        await api.cart.postCart(cart, headers)
    }

    return (
        <>
            {openCart ?
                <>
                    <DivCart>
                        <div className='title-cart'>MEU CARRINHO ({cart.length})</div>
                        {cart.map((el, i) =>
                            <ProductMount key={i}>
                                <img src={el.img} alt={el.name} />
                                <div>
                                    <div><strong>{el.name}</strong></div>
                                    <div><strong>Quantidade: </strong>{el.qtd}</div>
                                    <div><strong>Total: </strong>{(el.price * el.qtd / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                                </div>
                            </ProductMount>
                        )}
                        <button onClick={() => setOpen(false)}>Continuar Comprando</button>
                        <button onClick={() => handleCart()}>Finalizar compra</button>
                    </DivCart>
                    <DivOverlay onClick={() => setOpen(false)}></DivOverlay>
                </>
                :
                ''
            }
        </>
    )
}

const ProductMount = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-bottom: 2px solid lightgrey;

    .delete {
        margin-top: -25px;
        align-self: flex-end;
    }

    img {
        width: 150px;
    }

    >div{
        width: 150px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`

const DivCart = styled.div `
width: 400px;
    height: 100vh;
    
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: white;
    border-radius: none;
    
    .title-cart {
        width: 100%;
        height: 70px;
        
        background-color: black;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
    
    button {
        width: 250px;
        
        margin-top: 25px;
        background-color: #3A86FF;
    }

` 

const DivOverlay = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`
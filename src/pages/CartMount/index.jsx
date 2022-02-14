import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartMount"
import { useOpen } from "../../context/openCart"
import { SessionContext } from "../../context/session"
import { UserContext } from "../../context/user"
import useApi from "../../hooks/useApi"
import { fireAlert } from "../../utils/alerts"
import { DivCart, DivOverlay, ProductMount } from "./style"

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
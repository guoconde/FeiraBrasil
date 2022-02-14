import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../../components/FormComponents'
import { useCart } from '../../context/CartMount'
import { SessionContext } from '../../context/session'
import { UserContext } from '../../context/user'
import useApi from '../../hooks/useApi'
import FooterComplete from '../Footer'
import HeaderComplete from '../Header'

import Products from './Products'

export default function Home() {

    const api = useApi()
    const { cart } = useCart()
    const [openCart, setOpen] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    
    console.log(session)
    console.log(cart, 'aqui')
    
    let headers = ""

    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session) headers = { headers: { Authorization: `Bearer ${session.token}` }}

    async function handleCart() {
        setOpen(false)
        navigate('/carrinho')

        await api.cart.postCart(cart, headers)
    }

    return (
        <Main>
            <HeaderComplete openCart={openCart} setOpen={setOpen} />
            <DivMain>
                <h1>Verduras</h1>
                <DivProducts>
                    <Products />
                </DivProducts>
            </DivMain>
            <FooterComplete />
            {openCart ?
                <>
                    <div className='div-cart'>
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
                    </div>
                    <div onClick={() => setOpen(false)} className="div-overlay"></div>
                </>
                :
                ''
            }
        </Main>

    )
}

const DivMain = styled.div`
    width: 100%;
    height: 100vh;
    
    padding: 0 50px;
    padding-top: 200px;

    h1 {
        margin-bottom: 20px;
    }
`

const DivProducts = styled.div`
    width: 100%;

    display: flex;
    gap: 20px;
`

const ProductMount = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-bottom: 2px solid lightgrey;

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


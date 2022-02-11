import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../../components/FormComponents'
import { useCart } from '../../context/CartMount'
import FooterComplete from '../Footer'
import HeaderComplete from '../Header'

import Products from './Products'

export default function Home() {

    const { cart } = useCart()
    const [openCart, setOpen] = useState(false)
    const navigate = useNavigate()

    console.log(cart)

    return (
        <Main>
            <HeaderComplete setOpen={setOpen} />
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
                        <button onClick={() => navigate('/carrinho')}>Finalizar compra</button>
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
    margin-top: 300px;

    padding: 0 50px;

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


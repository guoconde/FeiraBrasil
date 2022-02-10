import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../../components/FormComponents'
import FooterComplete from '../Footer'
import HeaderComplete from '../Header'

import Products from './Products'

export default function Home() {

    const [openCart, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <Main>
            <HeaderComplete setOpen={setOpen}/>
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
                        <div>MEU CARRINHO</div>
                        <button onClick={() => setOpen(false)}>Continuar Comprando</button>
                        <button onClick={() => navigate('/carrinho')}>Finalizar compra</button>
                    </div>
                    <div className="div-overlay"></div>
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


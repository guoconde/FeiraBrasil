import { useContext } from 'react'
import styled from 'styled-components'
import { Main } from '../../components/FormComponents'
import { useCart } from '../../context/CartMount'
import { useOpen } from '../../context/openCart'
import { SessionContext } from '../../context/session'
import FooterComplete from '../Footer'
import HeaderComplete from '../Header'
import Products from './Products'

export default function Home() {

    const { cart } = useCart()
    const { openCart } = useOpen(false)
    const { session } = useContext(SessionContext)

    console.log(openCart)

    console.log(session)
    console.log(cart, 'aqui')

   

    return (
        <Main>
            <HeaderComplete />
            <DivMain>
                <h1>Verduras</h1>
                <DivProducts>
                    <Products />
                </DivProducts>
            </DivMain>
            <FooterComplete />
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




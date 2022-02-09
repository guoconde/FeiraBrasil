import styled from 'styled-components'
import { Footer, Header, Logo, Main } from '../../components/FormComponents'
import LogoImg from './FavIcon.svg'
import Products from './Products'

export default function Home() {

    return (
        <Main>
            <div className='fixed'>
                <Header>
                    <Logo>
                        <img src={LogoImg} alt="logo" />
                        <h1>FeiraBrasil</h1>
                    </Logo>
                    <h1>Olá, Fulano</h1>
                </Header>
                <nav>
                    <div>Opção 01</div>
                    <div>Opção 02</div>
                    <ion-icon name="cart-outline"></ion-icon>
                </nav>
            </div>
            <DivMain>
                <h1>Verduras</h1>
                <DivProducts>
                    <Products />
                </DivProducts>
            </DivMain>
            <Footer>
                ENCONTRE UMA LOJA FEIRABRASIL -
                CADASTRE-SE PARA RECEBER NOVIDADES -
                FEIRABRASIL JOURNAL -
                MAPA DO SITE
            </Footer>
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


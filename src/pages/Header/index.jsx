import LogoImg from './LogoImg.svg'
import { Header, Logo } from '../../components/FormComponents'
import Navigation from '../../components/FormComponents/Navigation'

export default function HeaderComplete() {
    return (
        <div className='fixed'>
            <Header>
                <Logo>
                    <img src={LogoImg} alt="logo" />
                    <h1>FeiraBrasil</h1>
                </Logo>
                <h1>Olá, Fulano</h1>
            </Header>
            <Navigation>
                <div>Opção 01</div>
                <div>Opção 02</div>
                <ion-icon name="cart-outline"></ion-icon>
            </Navigation>
        </div>
    )
}
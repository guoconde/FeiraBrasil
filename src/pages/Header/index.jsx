import LogoImg from './LogoImg.svg'
import { Header, Logo } from '../../components/FormComponents'
import Navigation from '../../components/FormComponents/Navigation'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
import { SessionContext } from '../../context/session'
import { useContext, useEffect, useState } from 'react'

export default function HeaderComplete() {

    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const [option, setOption] = useState()

    useEffect(() => {
        if (user || session) {
            setOption(
                <>
                    <h1>Olá, {session.username}</h1>
                    <div className='links'>
                        <p>Favoritos</p>
                        <p>Histórico de pedidos</p>
                    </div>
                </>
            )
        } else {
            setOption(
                <div className='btn'>
                    <button onClick={() => navigate('/entrar')}>Entrar</button>
                    <button onClick={() => navigate('/cadastrar')}>Cadastrar</button>
                </div>
            )
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='fixed'>
            <Header>
                <Logo>
                    <img src={LogoImg} alt="logo" />
                    <h1>FeiraBrasil</h1>
                </Logo>
                <div className="wellcome">
                    {option}
                </div>
            </Header>
            <Navigation>
                <div>Opção 01</div>
                <div>Opção 02</div>
                <ion-icon name="cart-outline"></ion-icon>
            </Navigation>
        </div>
    )
}
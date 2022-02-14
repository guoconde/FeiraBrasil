import LogoImg from './LogoImg.svg'
import { Header, Logo } from '../../components/FormComponents'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
import { SessionContext } from '../../context/session'
import { useContext, useEffect, useState } from 'react'

export default function HeaderComplete({ setOpen }) {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const { session, setSession } = useContext(SessionContext)
    const [option, setOption] = useState()

    function handleLogOut() {
        setUser()
        setSession()
        window.location.reload()
    }

    useEffect(() => {
        if (user || session) {
            setOption(
                <>
                    <h1>Olá, {session.username}</h1>
                    <div className='links'>
                        <p className='navigate' >Favoritos</p>
                        <p className='navigate' onClick={() => navigate('/historico')}>Histórico de pedidos</p>
                    </div>
                    <div className='log-out'>
                        <ion-icon onClick={handleLogOut} name="log-out-outline"></ion-icon>
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
                    <h1 className='navigate' onClick={() => navigate('/')}>FeiraBrasil</h1>
                </Logo>
                <div className="wellcome">
                    {option}
                </div>
                <div onClick={() => setOpen(true)} className='cart'>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            </Header>
        </div>
    )
}
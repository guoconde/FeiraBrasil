import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useCart } from "../../../context/CartMount"
import { SessionContext } from "../../../context/session"
import { UserContext } from "../../../context/user"
import useApi from "../../../hooks/useApi"
import HeaderComplete from '../../Header'
import { DivProduct } from "./style"

export default function InfoProduct() {

    const location = useLocation()
    const product = location.state.el
    const price = (product.price / 100)
    const api = useApi()
    const [qtd, setQtd] = useState(1)

    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const { cart, setCart } = useCart()
    const navigate = useNavigate()

    const [favorite, setFavorite] = useState(false)

    async function handleFavorite() {
        
        if (user || session) {
            const promisse = await api.favorite.favoriteProduct(product._id, session.userId, !favorite)
            
            const newFavorite = promisse.data.filter(el => el._id === product._id)
            
            if (newFavorite.length > 0) {
                setFavorite(true)
            } else {
                setFavorite(false)
            }
        } else {
            !favorite ? setFavorite(true) : setFavorite(false)
        }

    }

    function addToCart() {
        setCart([...cart, { ...product, qtd }])
        navigate('/')
    }

    return (
        <>
            <HeaderComplete />
            <DivProduct>
                <div className="info-product">
                    <p className="name">{product.name}</p>
                    {!favorite ?
                        <ion-icon onClick={handleFavorite} name="heart-outline"></ion-icon>
                        :
                        <ion-icon onClick={handleFavorite} name="heart-sharp"></ion-icon>
                    }
                    <p className="origin"><strong>Origem:</strong> {product.origin}</p>
                    <p className="price"><strong>Preço:</strong> {(price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por {product.und}</p>
                    <p className="description"><strong>Descrição:</strong> {product.description}</p>
                </div>
                <div className="to-cart">
                    <img src={product.img} alt="" />
                    <div className="quantity">
                        <label htmlFor="qtd"><strong>Quantidade:</strong> </label>
                        <input type="number" name="qtd" onChange={el => setQtd(el.target.value)} value={qtd} />
                        <div><strong>Total:</strong> R$ {(qtd * price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    </div>
                    <button onClick={addToCart}>Adicionar ao carrinho</button>
                    <button onClick={() => navigate('/')}>Continuar comprando</button>
                </div>
            </DivProduct>
        </>
    )
}


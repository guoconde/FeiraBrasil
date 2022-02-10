import { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { SessionContext } from "../../../context/session"
import { UserContext } from "../../../context/user"
import useApi from "../../../hooks/useApi"
import FooterComplete from "../../Footer"
import HeaderComplete from '../../Header'

export default function InfoProduct() {
    
    const location = useLocation()
    const product = location.state.el
    const price = (product.price / 100)
    const api = useApi()
    const [qtd, setQtd] = useState(1)
    const [favorite, setFavorite] = useState(product.favorite)
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)

    console.log(user)
    console.log(session, 'aqui')

   

    console.log(qtd)

    async function handleFavorite() {
        !favorite ? setFavorite(true) : setFavorite(false)

        if(user || session) {
            await api.favorite.favoriteProduct(product._id, !favorite)
            console.log('aqui')
        }

    }

    function addToCart() {
        console.log(qtd * price, favorite, product._id)

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
                </div>
            </DivProduct>
            <FooterComplete />
        </>
    )
}

const DivProduct = styled.div`
    width: 100%;
    height: 60vh;

    border-top: 3px solid #FB5607;

    display: flex;
    justify-content: space-between;

    .to-cart {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        padding: 30px;
        background-color: #F2D278;

        img {
            border: 3px solid #3A86FF;
            border-radius: 5px;
            width: 200px;
        }

        button {
            width: 200px;
            height: 50px;
            
            background-color: #3A86FF;
            
            :active {
                background-color: #2559ac;
            }
        }
        
        .quantity {
            display: flex;
            align-items: center;
            gap: 30px;
            
            input {
                all: unset;
                
                width: 100px;
                height: 40px;
                text-align: center;
                
                background-color: rgba(255, 255, 255, 0.5)
            }
        }
    }
    
    .info-product {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        position: relative;
        padding: 30px;
        
        font-size: 18px;
        line-height: 30px;
        
        .name {
            align-self: center;
            
            font-size: 22px;
            font-weight: 600;
            
            margin-bottom: 30px;
        }
        
        ion-icon {
            position: absolute;
            right: 30px;
            top: 30px;
            
            cursor: pointer;

            font-size: 30px;
            color: red;
        }
    }
    
`
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SessionContext } from "../../../../context/session"
import { UserContext } from "../../../../context/user"
import useApi from "../../../../hooks/useApi"
import getHeaders from "../../../../utils/headers"
import { Product } from "../../Products/style"

export default function Favorite() {

    const api = useApi()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const headers = getHeaders(user, session)

    useEffect(() => {
        
        async function handleProducts() {
            const promisse = await api.favorite.favoriteList(headers)
            setProducts(promisse.data)
        }
        handleProducts()
        // eslint-disable-next-line
    }, [])

    if (products.length === 0) {
        return 'Você não possui nenhum favorito.'
    }
    return (
        <>
            {
                products.map((el, i) =>
                    <Product key={i} onClick={() => navigate('/produto', { state: { id: el._id, el }})}>
                        <img src={el.img} alt={el.name} />
                        <p className='product-name'>{el.name}</p>
                        <p className='product-resume'>{el.resume}</p>
                        <p className='product-price'>{(el.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por {el.und}</p>
                    </Product>
                )
            }
        </>
    )
}
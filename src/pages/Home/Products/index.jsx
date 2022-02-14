import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useApi from "../../../hooks/useApi"
import { Product } from "./style"

export default function Products() {

    const api = useApi()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        
        async function handleProducts() {
            const promisse = await api.products.renderProducts()
            setProducts(promisse.data)
        }
        handleProducts()
        // eslint-disable-next-line
    }, [])

    if (products.length === 0) {
        return ''
    }
    return (
        <>
            {
                products.map((el, i) =>
                    <Product key={i} onClick={() => navigate('/produto', { state: { id: el._id, el }})}>
                        <img src={el.img} alt={el.name} />
                        <p className='product-name'>{el.name}</p>
                        <p className='product-resume'>{el.resume}</p>
                        <p className='product-price'>{(el.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </Product>
                )
            }
        </>
    )
}
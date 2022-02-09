import { useEffect, useState } from "react"
import styled from "styled-components"
import useApi from "../../../hooks/useApi"

export default function Products() {

    const api = useApi()
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function teste() {
            const promisse = await api.products.renderProducts()

            setProducts(promisse.data)

            console.log(promisse.data)
        }

        teste()

        // eslint-disable-next-line
    }, [])

    if (products.length === 0) {
        return ''
    }

    return (
        <>
            {
                products.map((el, i) =>
                    <Product key={i}>
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

const Product = styled.div`
    width: 200px;
    height: 250px;

    border: 5px solid #3A86FF;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

    padding: 15px 0;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        margin-bottom: 10px;
    }

    .product-name {
        font-size: 20px;
        font-weight: 600;
    }

    .product-price {
        font-weight: 600;
    }
`
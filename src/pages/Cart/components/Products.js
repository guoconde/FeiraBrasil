import { useContext } from "react"
import { SessionContext } from "../../../context/session"
import { UserContext } from "../../../context/user"
import useApi from "../../../hooks/useApi"
import { fireConfirm } from "../../../utils/alerts"
import getHeaders from "../../../utils/headers"
import { CartProducts, Delete, Img, Info, Infos, Product, ProductDesc, Quantity, Total, Unitary, Values } from "../style"

export default function Products({cartProducts, productQuantity, setProductsQuantity, setReload }){
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const headers = getHeaders(user,session)

    function changeQuantity(e,i){
        const value = e.target.value
        const newarr = productQuantity
        
        newarr[i] = parseInt(value)
        setProductsQuantity([...newarr])
    }
    
    async function deleteItem(id){
        const res = await fireConfirm()
        if(res.isConfirmed){
            await api.cart.deleteProduct(headers, id)
            setReload(true)
        }
    }
    return(
        <>
            <Infos>
                <p>PRODUTOS</p>
                <div>
                    <p>QUANTIDADE</p>
                    <p>VALOR UNITÁRIO</p>
                    <p>VALOR TOTAL</p>
                    <p>&nbsp;</p>
                </div>
            </Infos>
            <CartProducts>
                {cartProducts.map((product, i) => 
                        <Product key={i}>
                            <Info>
                                <Img src={product.img}></Img>
                                <ProductDesc>
                                    <h2>{product.name}</h2>
                                    <div><span>{product.type}</span><br/><span>{product.origin}</span></div>
                                    <h3>1{product.und}</h3>
                                </ProductDesc>
                            </Info>
                            <Values>
                                <Quantity>
                                    <input type="number" min={1} value={productQuantity[i] ? productQuantity[i]: 1} onChange={e=>{changeQuantity(e,i)}}></input>
                                </Quantity>
                                <Unitary>
                                    {product.price}
                                </Unitary>
                                <Total>
                                    {(parseFloat(product.price) * productQuantity[i]).toString()}
                                </Total>
                                <Delete onClick={()=>deleteItem(product._id)}>
                                    x
                                </Delete>
                            </Values>
                        </Product>
                    )}
            </CartProducts>
        </>
    )
}
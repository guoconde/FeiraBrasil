import { Img, InfoElement, ProductDesc } from "../style";

export default function Info({product, i}){
    return(
        <InfoElement key={i}>
            <Img src={product.img}/>
            <ProductDesc>
                    <h2>{product.name}</h2>
                    <div><span>{product.type}</span><br/><span>{product.origin}</span></div>
                    <h3>1{product.und}</h3>
                    <div><span>{(product.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> - <span>{product.quantity} unidades</span></div>
            </ProductDesc>
        </InfoElement>
    )
}
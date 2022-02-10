import { useLocation } from "react-router-dom"
import FooterComplete from "../../Footer"
import HeaderComplete from '../../Header'

export default function InfoProduct() {

    const location = useLocation()

    console.log(location.state)

    return (
        <>
        <HeaderComplete />
        <h1>aqui: {location.state.id}</h1>
        <FooterComplete />
        </>
    )
}
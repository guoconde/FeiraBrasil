import { Main } from '../../components/FormComponents'
import HeaderComplete from '../Header'
import Products from './Products'
import { DivMain, DivProducts } from './style'

export default function Home() {

    return (
        <Main>
            <HeaderComplete />
            <DivMain>
                <h1>Produtos:</h1>
                <DivProducts>
                    <Products />
                </DivProducts>
            </DivMain>
        </Main>

    )
}




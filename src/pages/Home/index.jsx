import { Main } from '../../components/FormComponents'
import FooterComplete from '../Footer'
import HeaderComplete from '../Header'
import Products from './Products'
import { DivMain, DivProducts } from './style'

export default function Home() {

    return (
        <Main>
            <HeaderComplete />
            <DivMain>
                <h1>Verduras</h1>
                <DivProducts>
                    <Products />
                </DivProducts>
            </DivMain>
            <FooterComplete />
        </Main>

    )
}




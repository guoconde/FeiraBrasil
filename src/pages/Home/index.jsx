import styled from 'styled-components'
import { Main } from '../../components/FormComponents'
import FooterComplete from '../Footer'
import HeaderComplete from '../Header'

import Products from './Products'

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

const DivMain = styled.div`
    margin-top: 300px;

    padding: 0 50px;

    h1 {
        margin-bottom: 20px;
    }
`

const DivProducts = styled.div`
    width: 100%;

    display: flex;
    gap: 20px;
`


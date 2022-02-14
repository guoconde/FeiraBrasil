import { Main } from '../../../components/FormComponents'
import HeaderComplete from '../../Header'
import Favorite from './Favorite'
import { DivMain, DivProducts } from '../style'

export default function Favorites() {
    return (
        <Main>
            <HeaderComplete />
            <DivMain>
                <h1>Favoritos:</h1>
                <DivProducts>
                    <Favorite />
                </DivProducts>
            </DivMain>
        </Main>
    )
}
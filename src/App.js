import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalContext from "./context"
import Cart from "./pages/Cart"
import Information from "./pages/Information"
import Payment from "./pages/Payment"
import Home from "./pages/Home"
import InfoProduct from "./pages/Home/InfoProduct"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp/"
import { GlobalStyle } from "./style/reset"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <GlobalContext>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/cadastrar" element={<SignUp/>}></Route>
                    <Route path="/entrar" element={<SignIn/>}></Route>
                    <Route path="/carrinho" element={<Cart/>}></Route>
                    <Route path="/pagamento" element={<Payment/>}></Route>
                    <Route path="/informacoes" element={<Information/>}></Route>
                    <Route path="/produto" element={<InfoProduct/>}></Route>
                </Routes>
            </GlobalContext>
        </BrowserRouter>
    )
}  

import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalContext from "./context"
import Cart from "./pages/Cart"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp/"
import { GlobalStyle } from "./style/reset"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <GlobalContext>
                <Routes>
                    <Route path="/cadastrar" element={<SignUp/>}></Route>
                    <Route path="/entrar" element={<SignIn/>}></Route>
                    <Route path="/carrinho" element={<Cart/>}></Route>
                </Routes>
            </GlobalContext>
        </BrowserRouter>
    )
}  

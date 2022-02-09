import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalContext from "./context"
import Home from "./pages/Home"
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
                </Routes>
            </GlobalContext>
        </BrowserRouter>
    )
}  

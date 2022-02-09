import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp/"
import { GlobalStyle } from "./style/reset"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/cadastrar" element={<SignUp/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}  

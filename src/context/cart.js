import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export default function CartContextProvider({children}){
    const [cart, setCart] = useLocalStorage("Cart", null);

    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
}
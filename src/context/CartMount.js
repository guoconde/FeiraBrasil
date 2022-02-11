import React, { createContext, useContext, useState } from "react";

export const CartMount = createContext({})

export const CartProvider = ({ children }) => {
        
    const [cart, setCart] = useState([])

    return (
        <CartMount.Provider value={{cart, setCart}}>
            { children }
        </CartMount.Provider>
    )
}

export const useCart = () => useContext(CartMount)
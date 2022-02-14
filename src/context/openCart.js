import React, { createContext, useContext, useState } from "react";

export const OpenCart = createContext({})

export const OpenProvider = ({ children }) => {
        
    const [openCart, setOpen] = useState(false)

    return (
        <OpenCart.Provider value={{openCart, setOpen}}>
            { children }
        </OpenCart.Provider>
    )
}

export const useOpen = () => useContext(OpenCart)
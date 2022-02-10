import CartContextProvider from "./cart"
import SessionContextProvider from "./session"
import UserContextProvider from "./user"

export default function GlobalContext({children}){
    return (
        <UserContextProvider>
            <SessionContextProvider>
                <CartContextProvider>
                    {children}
                </CartContextProvider>
            </SessionContextProvider>
        </UserContextProvider>
    )
}
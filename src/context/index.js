import CartContextProvider from "./cart"
import { CartProvider } from "./CartMount"
import SessionContextProvider from "./session"
import UserContextProvider from "./user"

export default function GlobalContext({ children }) {
    return (
        <UserContextProvider>
            <SessionContextProvider>
                <CartContextProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </CartContextProvider>
            </SessionContextProvider>
        </UserContextProvider>
    )
}
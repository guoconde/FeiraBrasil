import CartContextProvider from "./cart"
import { CartProvider } from "./CartMount"
import { OpenProvider } from "./openCart"
import SessionContextProvider from "./session"
import UserContextProvider from "./user"

export default function GlobalContext({ children }) {
    return (
        <UserContextProvider>
            <SessionContextProvider>
                <CartContextProvider>
                    <CartProvider>
                        <OpenProvider>
                            {children}
                        </OpenProvider>
                    </CartProvider>
                </CartContextProvider>
            </SessionContextProvider>
        </UserContextProvider>
    )
}
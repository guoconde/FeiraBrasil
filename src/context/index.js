import SessionContextProvider from "./session"
import UserContextProvider from "./user"

export default function GlobalContext({children}){
    return (
        <UserContextProvider>
            <SessionContextProvider>
                {children}
            </SessionContextProvider>
        </UserContextProvider>
    )
}
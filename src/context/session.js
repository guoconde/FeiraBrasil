import { createContext } from "react"
import useSessionStorage from "../hooks/useSessionStorage";

export const SessionContext = createContext();

export default function SessionContextProvider({children}){
    const [session, setSession] = useSessionStorage("Session", null);

    return <SessionContext.Provider value={{session, setSession}}>{children}</SessionContext.Provider>
}
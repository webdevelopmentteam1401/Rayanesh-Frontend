import { createContext, useState } from "react";

export const loginContext = createContext(null);

export default function LoginContextProvider({ children }) {
    const [isRegistered, setIsRegistered] = useState(true);
    const value = {
        isRegistered,
        setIsRegistered,
    };
    return (
        <loginContext.Provider value={value}>{children}</loginContext.Provider>
    );
}
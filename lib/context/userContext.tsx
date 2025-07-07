import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react"

type User = {
    id : string,
    email : string,
}

type UserContextType = {
    user : User | undefined,
    setUser : Dispatch<SetStateAction<User | undefined>>
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}:{children : ReactNode}) =>{
    const [user, setUser] = useState<User | undefined>(undefined);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
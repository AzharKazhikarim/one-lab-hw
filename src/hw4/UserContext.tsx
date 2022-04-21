import {createContext, useContext} from "react";


export type UserContent = {
    login: boolean,
    setLogin: (c: boolean) => void,
}
export const UserContext = createContext<UserContent>({
    login: false,
    setLogin: () => {
    },
})
export const useUserContext = () => useContext(UserContext)
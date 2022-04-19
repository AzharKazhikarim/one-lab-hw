import {createContext, useContext} from "react"

export type GlobalContent = {
    language: string
    setLanguage: (c: string) => void,
    dark: boolean,
    toggleDark: (c: boolean) => void,
}
export const MyGlobalContext = createContext<GlobalContent>({
    language: 'en', // set a default value
    setLanguage: () => {
    },
    dark: true,
    toggleDark: () => {
    },
})
export const useGlobalContext = () => useContext(MyGlobalContext)
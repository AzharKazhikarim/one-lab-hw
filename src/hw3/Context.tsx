import { createContext, useContext } from "react"

export type GlobalContent = {
    language: string
    setLanguage:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    language: 'en', // set a default value
    setLanguage: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)
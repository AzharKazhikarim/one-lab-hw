import { createContext, useContext } from "react";
import { rawTranslations } from "./rawTranslations";

export type Language = "ru" | "en";

export type LanguageContent = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: typeof rawTranslations[Language];
};
export const LanguageContext = createContext<LanguageContent>({
  language: "ru",
  setLanguage: () => {},
  translations: rawTranslations["ru"],
});

export const useLanguageContext = () => useContext(LanguageContext);

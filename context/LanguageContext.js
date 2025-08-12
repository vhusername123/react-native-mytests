import { createContext, useState } from "react";
import { Language } from "../constants/Language";
export const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [userLang, setLanguage] = useState("en");
  const langList = Object.keys(Language);
  return (
    <LanguageContext.Provider value={{ userLang, setLanguage, langList }}>
      {children}
    </LanguageContext.Provider>
  );
}

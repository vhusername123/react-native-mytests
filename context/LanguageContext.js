import { createContext, useState } from "react";
export const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [userLang, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ userLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

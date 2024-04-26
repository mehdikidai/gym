import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json"
import fr from "./lang/fr.json"
import ar from "./lang/ar.json"

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  },
  ar: {
    translation: ar
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
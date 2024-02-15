import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./languages/en.json";
import ptTranslation from "./languages/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { 
      ...enTranslation 
    },
    pt: { 
      ...ptTranslation 
    },
  },
  lng: "pt",
});

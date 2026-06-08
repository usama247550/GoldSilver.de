"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
      },
    },
    de: {
      translation: {
        welcome: "Willkommen",
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

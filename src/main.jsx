import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import { LanguageProvider } from "./context/LanguageContext";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: { global: global_en },
    es: { global: global_es },
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <LanguageProvider>
        <App />
        </LanguageProvider>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);

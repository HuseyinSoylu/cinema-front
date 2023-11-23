import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Cinemaximum Logo": "Cinemaximum Logo",
        "Menu Bar": "Menu Barrr",
        "MoviePass Text": "MoviePass Text",
        Films: "Films",
        Cinemas: "Cinemas",
        Search: "Search...",
        Profile: "Profile",
        Register: "Register",
        Login: "Login",
      },
    },
    tr: {
      translation: {
        "Cinemaximum Logo": "Cinemaximum Logosu",
        "Menu Bar": "Menü Çubuğu",
        "MoviePass Text": "MoviePass Metni",
        Films: "Filmler",
        Cinemas: "Sinemalar",
        Search: "Ara...",
        Profile: "Profil",
        Register: "Kayıt Ol",
        Login: "Giriş",
      },
    },
  },
  lng: "tr",
  fallbackLng: "en",
});

export default i18n;

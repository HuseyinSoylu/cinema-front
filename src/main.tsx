// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// // import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import translations from "./i18n/translations.ts";
// import i18n from "./i18n/i18n";

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./i18n";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);

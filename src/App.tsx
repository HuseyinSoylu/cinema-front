import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./Contexts/UserContext";
import MoviesDetail from "./pages/MoviesDetail";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MoviesDetail />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;

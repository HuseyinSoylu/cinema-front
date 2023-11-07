import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./Contexts/UserContext";
import MoviesDetail from "./pages/MoviesDetail";
import Registration from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MoviesDetail />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;

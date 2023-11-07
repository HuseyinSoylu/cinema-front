import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

import MainCarousel from "../Components/Carousels/MainCarousel";
import BottomCarousel from "../Components/Carousels/BottomCarousel";
import Header from "../Components/Header/Header";
import { UserContext } from "../Contexts/UserContext";
function Home() {
  const { state } = useLocation();
  return (
    <>
      <Header user={state} />
      <MainCarousel />
      <BottomCarousel />
    </>
  );
}

export default Home;
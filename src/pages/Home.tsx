import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

import MainCarousel from "../Components/Carousels/MainCarousel";
import BottomCarousel from "../Components/Carousels/BottomCarousel";
import Header from "../Components/Header/Header";
import { UserContext } from "../Contexts/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Home() {
  const { state } = useLocation();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header user={state} />
        <MainCarousel />
        <BottomCarousel />
      </QueryClientProvider>
    </>
  );
}

export default Home;

import React, { useContext } from "react";
import "./Home.css";

import MainCarousel from "../Components/Carousels/MainCarousel";
import BottomCarousel from "../Components/Carousels/BottomCarousel";
import Header from "../Components/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../Components/Footer/Footer";
const queryClient = new QueryClient();

function Home() {
  const userMail = localStorage.getItem("user");

  const user = userMail ? JSON.parse(userMail) : null;
  const userName = user ? user.name : null;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header user={userName} />
        <MainCarousel />
        <BottomCarousel />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default Home;

import React, { useContext } from "react";
import "./Home.css";

import MainCarousel from "../Components/Carousels/MainCarousel";
import BottomCarousel from "../Components/Carousels/BottomCarousel";
import Header from "../Components/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Home() {
  const userMail = localStorage.getItem("user");

  const user = userMail ? JSON.parse(userMail) : null; // Parse the JSON string if it exists
  const userName = user ? user.name : null; // Get the user's name
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header user={userName} />
        <MainCarousel />
        <BottomCarousel />
      </QueryClientProvider>
    </>
  );
}

export default Home;

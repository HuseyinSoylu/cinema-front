// import { useState } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import UserProvider from "./Contexts/UserContext";
// import TicketProvider from "./Contexts/TicketContext";
// import ChairProvider from "./Contexts/ChairContext";
// import MoviesDetail from "./pages/MoviesDetail";
// import Registration from "./pages/Register";
// import Login from "./pages/Login";
// import BuyTicket from "./pages/BuyTicket";
// function App() {
//   return (
//     <>
//       <UserProvider>
//         <TicketProvider>
//           <ChairProvider>
//             <Routes>
//               <Route index element={<Home />} />
//               <Route path="/movie/:id" element={<MoviesDetail />} />
//               <Route path="/buy/:id/:location/:time" element={<BuyTicket />} />

//               <Route path="/register" element={<Registration />} />
//               <Route path="/login" element={<Login />} />
//             </Routes>
//           </ChairProvider>
//         </TicketProvider>
//       </UserProvider>
//     </>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./Contexts/UserContext";
import TicketProvider from "./Contexts/TicketContext";
import ChairProvider from "./Contexts/ChairContext";
import MoviesDetail from "./pages/MoviesDetail";
import Registration from "./pages/Register";
import Login from "./pages/Login";
import BuyTicket from "./pages/BuyTicket";

function App() {
  return (
    <>
      <UserProvider>
        <TicketProvider>
          <ChairProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/movie/:id" element={<MoviesDetail />} />
              <Route path="/buy/:id/:location/:time" element={<BuyTicket />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </ChairProvider>
        </TicketProvider>
      </UserProvider>
    </>
  );
}

export default App;

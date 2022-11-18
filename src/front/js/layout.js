import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home.js";
// import { Demo } from "./pages/demo";
// import { Single } from "./pages/single";
import injectContext from "./store/appContext.js";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";

import DetailedViewCharacter from "./pages/DetailedViewCharacter.jsx";
import DetailedViewPlanet from "./pages/DetailedViewPlanet.jsx";
import DetailedViewStarship from "./pages/DetailedViewStarship.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/people/:id" element={<DetailedViewCharacter/>} />
            <Route path="/planets/:id" element={<DetailedViewPlanet/>} />
            <Route path="/starships/:id" element={<DetailedViewStarship/>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

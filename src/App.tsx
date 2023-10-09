import React, { Fragment, useRef, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { useFooterDimensions } from "./components/Footer/hooks";
import { MobileHeader } from "./components/Header/Mobile";

function App() {
  const [activeLink, setActiveLink] = useState("Home");
  const ref = useRef<HTMLDivElement | null>(null);
  const { height } = useFooterDimensions(ref);
  
  return (
    <Fragment>
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <MobileHeader activeLink={activeLink} setActiveLink={setActiveLink} />
      <Routes>
        <Route path={"/"} element={<Homepage footerHeight={height}/>} />
        <Route path={"/contact"} element={<Contact footerHeight={height}/>} />
        <Route path={"/hobby"} element={<Hobby footerHeight={height}/>} />
        <Route path={"/projects"} element={<Projects footerHeight={height}/>} />
      </Routes>
      <Footer activeLink={activeLink} setActiveLink={setActiveLink} footerRef={ref}/>
    </Fragment>
  );
}

export default App;

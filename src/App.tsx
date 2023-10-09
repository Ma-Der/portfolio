import React, { Fragment, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { MobileHeader } from "./components/Header/Mobile";

function App() {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <Fragment>
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <MobileHeader activeLink={activeLink} setActiveLink={setActiveLink}/>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/hobby"} element={<Hobby />} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
      <Footer activeLink={activeLink} setActiveLink={setActiveLink}/>
    </Fragment>
  );
}

export default App;

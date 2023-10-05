import React, { Fragment, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

function App() {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <Fragment>
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/about"} element={<AboutMe />} />
        <Route path={"/hobby"} element={<Hobby />} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
      <Footer activeLink={activeLink} setActiveLink={setActiveLink}/>
    </Fragment>
  );
}

export default App;

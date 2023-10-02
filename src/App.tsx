import React, { Fragment } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutMe } from "./components/AboutMe";
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/about"} element={<AboutMe />} />
        <Route path={"/hobby"} element={<Hobby />} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

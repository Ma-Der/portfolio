import React, { Fragment, useEffect, useRef, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { MobileHeader } from "./components/Header/Mobile";
import data from "./utils/static-content.json";
import { Language } from "./contracts/components";
import { getActiveLinkFromUrl } from "./utils/getActiveLinkFromUrl";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const [language, setLanguage] = useState<Language>("eng");
  const ref = useRef<HTMLDivElement | null>(null);
  const { eng, pol } = data;
  const lang = language === "eng" ? eng : pol;

  useEffect(() => {
    const link = getActiveLinkFromUrl();

    if (link === "") {
      setActiveLink("home");
    } else {
      setActiveLink(link);
    }
  }, [activeLink]);

  return (
    <Fragment>
      <Header
        activeLink={activeLink}
        navigation={lang.navigation}
        setActiveLink={setActiveLink}
        setLanguage={setLanguage}
      />
      <MobileHeader
        activeLink={activeLink}
        navigation={lang.navigation}
        setActiveLink={setActiveLink}
        setLanguage={setLanguage}
      />
      <div className="wrapper">
        <Routes>
          <Route path={"/"} element={<Homepage {...lang.home} />} />
          <Route path={"/contact"} element={<Contact {...lang.contact} />} />
          <Route path={"/hobby"} element={<Hobby {...lang.hobby} />} />
          <Route path={"/projects"} element={<Projects {...lang.projects} />} />
        </Routes>
      </div>
      <Footer
        activeLink={activeLink}
        navigation={lang.navigation}
        setActiveLink={setActiveLink}
        footerRef={ref}
      />
    </Fragment>
  );
}

export default App;

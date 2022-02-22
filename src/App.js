import React, { useState } from "react";
import "./App.scss";
import Index from "./components/pages/index/Index";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Projects from "./components/pages/projects/Projects";
import NotFound from "./components/pages/notFound/NotFound";
import getChristmas from "./getChristmas.js";
import SnowEffect from "./components/effects/SnowEffect";
import ContactMe from "./components/pages/contactMe/ContactMe";
import Private from "./components/pages/privateSide/Private";





function App() {
  const [theme, setTheme] = useState("dark");
  
  const snow = () => {
    if (getChristmas() === true) {
      return (
        <SnowEffect />
      );
    }
    else return "";
  }
  return (
    <BrowserRouter>
      <div className="app" theme={theme} >
        {snow()}
        <Routes>
          <Route path="/"
            element={
              <Index
                theme={theme}
                setTheme={setTheme}
              />}
          />
          <Route path='/projects' element={<Projects
             theme={theme}
             setTheme={setTheme}
          />}
          />
          <Route path='/contact-me' element={<ContactMe
             theme={theme}
             setTheme={setTheme}
          />}
          />
          <Route path="/my-private-space" element={<Private />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

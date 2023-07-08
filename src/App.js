import { Route, Routes } from "react-router-dom";
import { Contact, Home, Services } from "./containers";
import { Aside, Footer, Navbar } from "./components";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import "./components/components.css";
// import "./containers/container.css";

import "./App.css";
import { useState } from "react";

function App() {
  const [asideMenuActive, setAsideMenuActive] = useState(false);
  return (
    <div className="app-body container-fluid d-flex flex-column p-0 m-0">
      <nav className="container-fluid w-100 p-0" id="navbar-container">
        <Navbar
          asideMenuActive={asideMenuActive}
          menuActiveFunction={setAsideMenuActive}
        />
      </nav>
      <Aside
        asideMenuActive={asideMenuActive}
        menuActiveFunction={setAsideMenuActive}
      />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import SubSection from "./Components/SubSection";
import MainPage from "./pages/MainPage";

const App = () => {
  const [nav, setNav] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    weight: "",
    height: "",
    goal: "",
    membresia: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 405) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  return (
    <div className="App flex flex-col h-screen">
      <BrowserRouter>
        <Nav nav={nav} toggleModal={toggleModal} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                toggleModal={toggleModal}
                formData={formData}
                setFormData={setFormData}
                isModalOpen={isModalOpen}
              />
            }
          />
          <Route
            path="/suscripcion"
            element={
              <SubSection
                toggleModal={toggleModal}
                formData={formData}
                setFormData={setFormData}
                isModalOpen={isModalOpen}
              />
            }
          />
        </Routes>
        <Footer nav={nav} />
      </BrowserRouter>
    </div>
  );
};

export default App;

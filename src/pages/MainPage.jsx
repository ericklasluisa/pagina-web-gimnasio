import React from 'react'
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Gallery from '../Components/Gallery';
import SubSection from '../Components/SubSection';
import Subscription from '../Components/Subscription';
import { ContactUs } from '../Components/ContactUs';

function MainPage({toggleModal, formData, setFormData, isModalOpen}) {
  return (
    <>
      <HeroSection toggleModal={toggleModal} />
      <About />
      <Gallery />
      <Subscription
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        formData={formData}
        setFormData={setFormData}
      />
      <ContactUs />
    </>
  );
}

export default MainPage
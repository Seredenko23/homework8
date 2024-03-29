import React from 'react';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactUs from "./components/ContactUs/ContactUs";
import './App.scss';
import './css/normalize.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Team/>
      <ServicesSection/>
      <ContactUs/>
    </div>
  );
}

export default App;

import React from 'react';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";
import './App.scss';
import './css/normalize.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Team/>
    </div>
  );
}

export default App;

import React from 'react';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import './App.scss';
import './css/normalize.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
    </div>
  );
}

export default App;

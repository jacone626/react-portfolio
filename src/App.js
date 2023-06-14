import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div id="full-screen">
      <Header />
        <div className="background-color">
          <PortfolioContainer />
        </div>
      <Footer />
    </div>
  );
}

export default App;

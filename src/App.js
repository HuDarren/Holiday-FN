import React from "react";
import Routes from "./routes";
import NavBar from "./components/NavBar/nav-home";
import Footer from "./components/Footer/footer-home"

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;

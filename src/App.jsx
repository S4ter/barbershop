// import { useState } from "react";
import Header from "./assets/Header";
import Main from "./assets/Main";
import Footer from "./assets/Footer";
import Services from "./assets/Services";
import "./App.css";

function App() {
  return (
    <div className="w-full">
      <section id="header">
        <Header />
      </section>
      <section id="Main">
        <Main />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Footer">
        <Footer />
      </section>
      <section id="main"></section>
    </div>
  );
}

export default App;

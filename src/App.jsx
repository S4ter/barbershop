// import { useState } from "react";
import Header from "./assets/Header";
import Main from "./assets/Main";
import Footer from "./assets/Footer";
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
      <section id="Footer">
        <Footer />
      </section>
      <section id="main"></section>
    </div>
  );
}

export default App;

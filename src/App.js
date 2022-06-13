import React from "react";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

function App() {
  const [dark, setDark] = React.useState(true);

  function toggleMood() {
    setDark(!dark);
  }

  document.body.classList.toggle("dark");

  return (
    <Router>
      <Header toggle={toggleMood} dark={dark} />
      <Home toggle={toggleMood} dark={dark} />
    </Router>
  );
}

export default App;

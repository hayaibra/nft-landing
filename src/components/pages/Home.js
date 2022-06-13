import React from "react";
import HeroSection from "../HeroSection";
import Free from "../Free";
import "../../scss/pages/_Home.scss";
import Clients from "../Clients";
import Super from "../Super";
import Release from "../Release";
import Like from "../Like";
import SignUp from "../SignUp";
import Footer from "../Footer";
import scrollreveal from "scrollreveal";

function Home({ toggle, dark }) {
  React.useEffect(() => {
    const registerAnimation = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `nav,.hero,.free,.clients,.super,.release,.like,.sign-up,.footer`,
        {
          interval: 500,
        }
      );
    };
    registerAnimation();
  }, []);

  return (
    <>
      <HeroSection toggle={toggle} dark={dark} />
      <Free />
      <Clients />
      <Super toggle={toggle} dark={dark}/>
      <Release />
      <Like />
      <SignUp toggle={toggle} dark={dark}/>
      <Footer toggle={toggle} dark={dark} /> 
    </>
  );
}

export default Home;

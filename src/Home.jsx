import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Techs from "./components/Techs/Techs";
import Works from "./components/Works/Works";

const Home = ({ Language }) => {
    return (
        <>
            <Hero Language={Language} />
            <Works />
            <Techs Language={Language} />
            <About Language={Language} />
            <Contact Language={Language} />
            <Footer />
        </>
    );
};

export default Home;

import React from "react";
import Button from "../Button/Button";
import Animated from "../../Assets/Programmer.gif";
import "./Hero.css";
import { Link } from "react-scroll";
import language from "../../language";

const Hero = ({ Language }) => {
    return (
        <section className="hero" name="hero">
            <div className="hero-split" id="container">
                <div className="hero-split__left">
                    <div className="hero__heading">
                        <h1>{language[Language].Hero.firstHeading}</h1>
                        <p>{language[Language].Hero.secondHeading} </p>
                    </div>
                    <Link
                        to="contact"
                        smooth={true}
                        spy={true}
                        duration={300}
                        offset={-70}
                    >
                        <Button
                            to="contact"
                            label={language[Language].Hero.Button}
                            boxShadow="var(--clr-primary-light)"
                        />
                    </Link>
                </div>
                <div className="hero-split__right">
                    <img src={Animated} alt="Programmer" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

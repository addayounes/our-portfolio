import React from "react";
import Button from "../Button/Button";
import Animated from "../../Assets/Programmer.gif";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section className="hero" name="hero">
            <div className="hero-split" id="container">
                <div className="hero-split__left">
                    <div className="hero__heading">
                        <h1>
                            Vous cherchez à vous démarquer davantage ? obtenir
                            un site Web
                        </h1>
                        <p>
                            Nous vous aidons à paraître plus professionnel avec
                            un site Web qui reflète votre expérience
                        </p>
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
                            label="Nous contacter"
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

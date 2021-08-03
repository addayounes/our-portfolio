import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import language from "../../language";
import Logo from '../../Assets/inovv-logo.png'
import "./Navbar.css";

const Navbar = ({ Language, setLanguage }) => {
    const [scroll, setsSroll] = useState(false);
    const [Nav, setNav] = useState(false);
    const closeNav = () => setNav(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) setsSroll(true);
        else setsSroll(false);
    });
    return (
        <header className={`navbar-header ${scroll ? "scroll-border" : ""}`}>
            <div className="navbar" id="container">
                <div className="logo">
                    <Link to="hero" smooth={true} duration={300} offset={-100}>
                        <RouterLink to="/">
                            <img src={Logo} alt="inovv" />
                        </RouterLink>
                    </Link>
                </div>
                <nav>
                    <ul className={`${Nav ? "hidden" : ""}`}>
                        <li>
                            <Link
                                onClick={closeNav}
                                activeClass="active-link"
                                to="work"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-70}
                            >
                                {language[Language].Navbar.firstLink}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeNav}
                                activeClass="active-link"
                                to="about-us"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-70}
                            >
                                {language[Language].Navbar.secondLink}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeNav}
                                activeClass="active-link"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-70}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-lang-change">
                        <ul>
                            <li
                                className={`${
                                    Language === "fr" ? "selected-lang" : ""
                                }`}
                                onClick={() => setLanguage("fr")}
                            >
                                <p>FR</p>
                            </li>
                            <li
                                className={`${
                                    Language === "en" ? "selected-lang" : ""
                                }`}
                                onClick={() => setLanguage("en")}
                            >
                                <p>EN</p>
                            </li>
                        </ul>
                    </div>
                    {Nav ? (
                        <RiCloseFill
                            className="nav-icon"
                            onClick={closeNav}
                            size={32}
                        />
                    ) : (
                        <RiMenu3Fill
                            className="nav-icon"
                            onClick={() => setNav((v) => !v)}
                            size={32}
                        />
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [scroll, setsSroll] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) setsSroll(true);
        else setsSroll(false);
    });
    return (
        <header className={`navbar-header ${scroll ? "scroll-border" : ""}`}>
            <div className="navbar" id="container">
                <div className="logo">
                    <Link to="hero" smooth={true} duration={300} offset={-80}>
                        <RouterLink to="/">Logo</RouterLink>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link
                                activeClass="active-link"
                                to="work"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-70}
                            >
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active-link"
                                to="about-us"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-70}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
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
                    <div className="nav-cta"></div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

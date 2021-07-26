import React from "react";
import { ReactComponent as Wave } from "../../Assets/wave.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <Wave className="wave" />
            <footer>
                <p>Nom &#169; {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Footer;

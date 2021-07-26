import React, { useState } from "react";
import language from "../../language";
import { technologies } from "./Technologies";
import "./Techs.css";

const Techs = ({ Language }) => {
    const [Hover, setHover] = useState({
        React: false,
        Redux: false,
        NodeJS: false,
        MongoDB: false,
        Firebase: false,
    });
    return (
        <section className="technologies">
            <h1>{language[Language].Techs.heading}</h1>
            <div className="techs" id="container">
                {technologies.map((Tech, idx) => {
                    return (
                        <div key={idx} className="techs-col">
                            <div
                                style={{
                                    display: Hover[Tech.name]
                                        ? "block"
                                        : "none",
                                }}
                                className="tech-name"
                            >
                                {Tech.name}
                            </div>
                            <Tech.Logo
                                onMouseLeave={() =>
                                    setHover((h) => ({
                                        ...h,
                                        [Tech.name]: false,
                                    }))
                                }
                                onMouseEnter={() =>
                                    setHover((h) => ({
                                        ...h,
                                        [Tech.name]: true,
                                    }))
                                }
                                style={{
                                    color: Hover[Tech.name]
                                        ? Tech.color
                                        : "rgb(151, 151, 151)",
                                }}
                                // size={60}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Techs;

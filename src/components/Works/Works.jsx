import React from "react";
import Project from "./Project";
import { projects } from "./Projects";
import "./Works.css";

const Works = () => {
    return (
        <section name="work" className="works">
            {projects.map((project, idx) => {
                return <Project key={idx} {...project} />;
            })}
        </section>
    );
};

export default Works;

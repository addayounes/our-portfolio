import React from "react";
import Button from "../Button/Button";
import { FaAngleLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import "./ProjectDetails.css";

const ProjectDetails = ({ project, Language }) => {
    const { title, description, demo, showUpImage } = project;
    const history = useHistory();
    const style = {
        backgroundImage: `url(${showUpImage})`,
        backgroundSize: "cover",
    };
    return (
        <section className="project-details">
            <div id="container">
                <div className="project-details__infos">
                    <FaAngleLeft onClick={() => history.push("/")} />
                    <h1>{title}</h1>
                    <p>{description[Language]}</p>
                    <Button
                        variant="outlined"
                        color="white"
                        hoverColor="black"
                        label="Demo"
                        toLink={demo}
                    />
                </div>
            </div>
            <div
                style={style}
                className="project-details__image-container"
            ></div>
        </section>
    );
};

export default ProjectDetails;

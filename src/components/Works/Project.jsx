import React, { useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ title, thumbnail, to }) => {
    const [Hover, setHover] = useState(false);
    return (
        <div className="project">
            <Link to={to}>
                <img
                    className={`${!Hover ? "darken-image" : ""}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    src={thumbnail}
                    alt={title}
                />
            </Link>
        </div>
    );
};

export default Project;

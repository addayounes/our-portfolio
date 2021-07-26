import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Button.css";

const Button = ({
    label,
    variant,
    color,
    hoverColor,
    size,
    StartIcon,
    EndIcon,
    fullWidth,
    OnClick,
    boxShadow,
    to,
    toLink,
}) => {
    const [hover, setHover] = useState(false);
    if (variant === "contained") {
        if (hover) {
            color = hoverColor;
        }
    } else if (variant === "outlined") {
        if (hover && color !== "white") {
            variant = "contained";
        }
    } else if (variant === "none") {
        if (hover) {
            variant = "none";
        }
    }
    const style = {
        backgroundColor:
            variant === "contained"
                ? color
                : variant === "outlined"
                ? "transparent"
                : variant === "none" && "transparent",
        border: variant !== "none" && `1px solid ${color}`,
        fontSize:
            size === "medium"
                ? "var(--fz-m)"
                : size === "small"
                ? "var(--fz-s)"
                : size === "extraSmall" && "var(--fz-xs)",
        width: fullWidth && "100%",
        boxShadow: hover && boxShadow ? `0 8px 20px 0 ${boxShadow}` : "none",
        textDecoration: "none",
        color:
            variant === "contained"
                ? "white"
                : variant === "outlined" || variant === "none"
                ? color
                : variant === "outlined" && color === "white" && "black",
    };
    const IconStyle = {
        color: variant === "contained" && "white",
        margin: StartIcon ? "0 .5rem -.1rem 0" : EndIcon && " 0 0 -.1rem .5rem",
        fontSize: ".875rem",
        position: "relative",
        transition: ".15s ease-out",
        top: "1px",
        right: EndIcon && hover ? "-3px" : "0",
    };
    return (
        <RouterLink
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="btn"
            target="_blank"
            style={style}
            to={{ pathname: toLink }}
        >
            {StartIcon && <StartIcon style={IconStyle} />}
            {label}
            {EndIcon && <EndIcon style={IconStyle} />}
        </RouterLink>
    );
};

Button.defaultProps = {
    variant: "contained",
    color: "var(--clr-primary)",
    hoverColor: "var(--clr-primary-dark)",
    size: "medium",
};
export default Button;

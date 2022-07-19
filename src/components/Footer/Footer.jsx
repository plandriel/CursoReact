import React from "react";
import "./Styles.css"

const Footer = () => {
    return (
        <div className="footer">
            <p>
            &copy;{new Date().getFullYear()} por 
            <a href="https://github.com/plandriel"> Pedro Landriel</a>, Todos
            los derechos reservados.
            </p>
        </div>
    );
};

export default Footer;
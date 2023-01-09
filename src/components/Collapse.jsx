import React, { useState } from "react";

const Collapse = ({ title, texte }) => {
    const [isOpen, setIsOpen] = useState(false);

    const showInfo = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapseContainer">
            <div className="collapse" onClick={showInfo}>
                <div className="collapse--description">
                    <h2>{title}</h2>
                    <img
                        className={isOpen ? "rotate-center" : "rotate-reverse"}
                        src="./images/collapse_arrow.png"
                        alt="fleche"
                    ></img>
                </div>
                <div
                    className={isOpen ? "collapse--texte" : "collapse__closed"}
                >
                    <p>{texte}</p>
                </div>
            </div>
        </div>
    );
};

export default Collapse;

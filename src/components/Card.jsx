import React from "react";

const Card = ({ accommodation }) => {
    return (
        <li
            className="card"
            style={{
                backgroundImage: `url(${accommodation.cover})`,
                backgroundSize: "cover",
            }}
        >
            <p>{accommodation.title}</p>
        </li>
    );
};

export default Card;

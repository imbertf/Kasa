import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ accommodation }) => {
    return (
        <NavLink to={`/logements/${accommodation.id}`}>
            <li
                className="card"
                style={{
                    backgroundImage: `url(${accommodation.cover})`,
                    backgroundSize: "cover",
                }}
            >
                <p>{accommodation.title}</p>
            </li>
        </NavLink>
    );
};

export default Card;

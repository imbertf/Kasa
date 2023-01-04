import React from "react";
import { Link } from "react-router-dom";

const Card = ({ accommodation }) => {
    return (
        <Link to={`/${accommodation.id}`}>
            <li
                className="card"
                style={{
                    backgroundImage: `url(${accommodation.cover})`,
                    backgroundSize: "cover",
                }}
            >
                <p>{accommodation.title}</p>
            </li>
        </Link>
    );
};

export default Card;

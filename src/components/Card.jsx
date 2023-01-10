import React from "react";
import { Link } from "react-router-dom";

// Add link to the Card component to redirect to Accommodation page
// Right accommodation page will be render thanks to ID selection
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

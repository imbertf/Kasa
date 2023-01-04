import React from "react";

const Host = ({ name, picture }) => {
    return (
        <div className="host">
            <p className="host--name">{name}</p>
            <img src={picture} alt="hôte" className="host--picture" />
        </div>
    );
};

export default Host;

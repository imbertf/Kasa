import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
        <Fragment>
            <div className="err404Container">
                <p className="err404Container--404">404</p>
                <p className="err404Container--txt">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <p className="err404Container--link">
                        Retourner sur la page d'accueil
                    </p>
                </NavLink>
            </div>
        </Fragment>
    );
};

export default Error404;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Error404 = () => {
    return (
        <Fragment>
            <Header />
            <div className="err404Container">
                <p className="err404Container--404">404</p>
                <p className="err404Container--txt">
                    Oups ! La page que vous demnadez n'existe pas.
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
            <Footer />
        </Fragment>
    );
};

export default Error404;

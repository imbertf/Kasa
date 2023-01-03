import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerContainer--logoNav">
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

export default Header;

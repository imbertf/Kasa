import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
// import Banner from "./Banner";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerContainer--logoNav">
                <Logo />
                <Navigation />
            </div>
            {/* <Banner /> */}
        </div>
    );
};

export default Header;

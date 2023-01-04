import React, { Fragment } from "react";
import Accommodation from "../../components/Accommodation";
import Banner from "../../components/Banner";

const Home = () => {
    return (
        <Fragment>
            <div className="homeContainer">
                <Banner />
                <Accommodation />
            </div>
        </Fragment>
    );
};

export default Home;

import React, { Fragment } from "react";
import Accommodation from "../../components/Accommodation";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className="homeContainer">
                <Banner />
                <Accommodation />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Home;

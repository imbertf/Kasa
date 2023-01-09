import React, { Fragment } from "react";
import Accommodation from "../../components/Accommodation";
import Banner from "../../components/Banner";
import banner_image from "../../assets/images/home_banner.jpg";

const Home = () => {
    return (
        <Fragment>
            <div className="homeContainer">
                <Banner image={banner_image} />
                <Accommodation />
            </div>
        </Fragment>
    );
};

export default Home;

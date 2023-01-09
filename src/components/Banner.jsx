import React from "react";

const Banner = ({ image }) => {
    const bannerImage = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="bannerContainer" style={bannerImage}>
            <p className="bannerContainer--txt">
                Chez vous, partout et ailleurs
            </p>
        </div>
    );
};

export default Banner;

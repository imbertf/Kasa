import React from "react";

// Provide image as props from parent
// Return banner with image chosen in parent element
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

import React from "react";
import Star from "../assets/images/star.png";
import redStar from "../assets/images/redStar.png";

const Rate = ({ scaleValue }) => {
    const range = [1, 2, 3, 4, 5];

    return range.map((rangeElem, index) =>
        scaleValue >= rangeElem ? (
            <img
                key={`${index}-${rangeElem}`}
                src={redStar}
                alt="étoile rouge"
            />
        ) : (
            <img key={`${index}-${rangeElem}`} src={Star} alt="étoile" />
        )
    );
};

export default Rate;

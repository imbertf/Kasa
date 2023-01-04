import React from "react";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex]})`,
    };

    const backArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
    };

    const forwardArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
    };

    const previousImage = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const isLastImage = currentIndex === slides.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <MdArrowBackIos style={backArrow} onClick={previousImage} />
            <MdArrowForwardIos style={forwardArrow} onClick={nextImage} />
            <div style={slideStyles}></div>
        </>
    );
};

export default Carousel;

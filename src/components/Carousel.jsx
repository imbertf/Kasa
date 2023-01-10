import React from "react";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Allow user to switch between location pictures
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

    // Test if we user is seeing the first image which is state(0)
    // Then if first image is shown, display last image of array selecting state - 1 and define it as newIndex in setCurrentIndex
    // Else retire 1 to currentIndex to display previous image
    const previousImage = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Test if we user is seeing the last image checking if there is previous image in slide array
    // If it s the last one, display first image of array
    // If it s not, allow to move on to the next slide setting +1 to currentIndex
    const nextImage = () => {
        const isLastImage = currentIndex === slides.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // pageNumber div use currentIndex + number 1 to show current image displayed on slides array
    return (
        <>
            <MdArrowBackIos style={backArrow} onClick={previousImage} />
            <MdArrowForwardIos style={forwardArrow} onClick={nextImage} />
            <div style={slideStyles}></div>
            <div className="pageNumber">
                {currentIndex + 1}/{slides.length}
            </div>
        </>
    );
};

export default Carousel;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

// Get accommodation data from data folder
// Create <UL> with Card component data as props
// Axios is used to get future data when backend will be operational
const Accommodation = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/logements/logements.json").then((res) => setData(res.data));
    }, []);

    return (
        <ul className="cardsContainer">
            {data.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </ul>
    );
};

export default Accommodation;

import React, { useState, useEffect } from "react";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";
import axios from "axios";
import { useParams } from "react-router-dom";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Carousel from "../../components/Carousel";
import Error404 from "../Error";

// Display right page depending on extracted ID from URL
// Function will compare ID url with ID in data and render logement page
// If ID is wrong, user will be renavigate to 404 error page
// Axios is used to get future data when backend will be operational
const Index = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/logements/logements.json").then((res) => setData(res.data));
    }, []);

    const logementData = data.find((logement) => logement.id === id);

    return logementData ? (
        <div className="accommodationContainer">
            <div className="carousel__container">
                <Carousel slides={logementData.pictures} />
            </div>

            <div className="logement__host__infos">
                <div className="logement__infos">
                    <div>
                        <h2>{logementData.title}</h2>
                        <p className="location">{logementData.location}</p>
                    </div>
                    <div className="tag__container">
                        {logementData.tags.map((tag, index) => (
                            <Tag key={index} texte={tag} />
                        ))}
                    </div>
                </div>

                <div className="host__container">
                    <div className="rate__container">
                        <Rate scaleValue={logementData.rating} />
                    </div>
                    <Host
                        name={logementData.host.name}
                        picture={logementData.host.picture}
                    />
                </div>
            </div>

            <div className="accommodation__collapse__container">
                <Collapse
                    title="Description"
                    texte={logementData.description}
                />
                <Collapse
                    title="Equipements"
                    texte={logementData.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                />
            </div>
        </div>
    ) : (
        <Error404 />
    );
};

export default Index;

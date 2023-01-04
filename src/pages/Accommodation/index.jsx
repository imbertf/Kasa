import React from "react";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";
import data from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Host from "../../components/host";
import Rate from "../../components/rate";
import Carousel from "../../components/Carousel";

const Index = () => {
    const { id } = useParams();
    const logementData = data.find((logement) => logement.id === id);
    const tags = logementData.tags;
    const equipments = logementData.equipments;
    const host = logementData.host;
    const rate = logementData.rating;
    const slides = logementData.pictures;

    return (
        <div className="accommodationContainer">
            <div className="carousel__container">
                <Carousel slides={slides} />
            </div>
            <h2>{logementData.title}</h2>
            <p className="location">{logementData.location}</p>
            <Host name={host.name} picture={host.picture} />
            <Rate scaleValue={rate} />
            <div className="tag__container">
                {tags.map((tag) => (
                    <Tag texte={tag} />
                ))}
            </div>
            <div className="accommodation__collapse__container">
                <Collapse
                    title="Description"
                    texte={logementData.description}
                />
                <Collapse
                    title="Equipements"
                    texte={equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                    ))}
                />
            </div>
        </div>
    );
};

export default Index;

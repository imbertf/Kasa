import React from "react";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";
import data from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Host from "../../components/host";
import Rate from "../../components/rate";
import Carousel from "../../components/Carousel";
import Error404 from "../Error";

const Index = () => {
    const { id } = useParams();
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

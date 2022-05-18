import React, { useState } from "react";
import BannerAbout from "../components/BannerAbout";



const About = () => {

  let [isExpanded1, setIsExpanded1] = useState(false);
  let [isExpanded2, setIsExpanded2] = useState(false);
  let [isExpanded3, setIsExpanded3] = useState(false);
  let [isExpanded4, setIsExpanded4] = useState(false);

  return (
    <div>
      <BannerAbout />
      <section className="about" >
       <div className={isExpanded1 ? "dropdown dropdown--expanded" : "dropdown" }  onClick={() => setIsExpanded1(!isExpanded1)}>
        <h2 className="dropdown__title">Fiabilité</h2>
        <div className="dropdown__content">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </div>

      <div className={isExpanded2 ? "dropdown dropdown--expanded" : "dropdown" } onClick={() => setIsExpanded2(!isExpanded2)} >
        <h2 className="dropdown__title">Respect</h2>
        <div className="dropdown__content">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      </div>

      <div className={isExpanded3 ? "dropdown dropdown--expanded" : "dropdown" } onClick={() => setIsExpanded3(!isExpanded3)} >
        <h2 className="dropdown__title">Service</h2>
        <div className="dropdown__content">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      </div>

      <div className={isExpanded4 ? "dropdown dropdown--expanded" : "dropdown" } onClick={() => setIsExpanded4(!isExpanded4)} >
        <h2 className="dropdown__title">Responsabilité</h2>
        <div className="dropdown__content">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>

      </section>
    </div>
  );
};

export default About;

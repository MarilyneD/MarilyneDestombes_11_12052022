import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Stars from "../components/Stars";

const Lodging = () => {
  let { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("../../data/logements.json").then((res) => setData(res.data));
  }, []);

  console.log("data", data);
  let rental = data.filter((rental) => rental.id === id);

  if (data.length === 0) {
    return <p>Chargement des data...</p>;
  }
  return (
    <div className="lodging">
      <img className="lightbox" src={rental[0].pictures[0]} alt="" />

      <div className="title">
        <div className="title__title">
          {rental[0].title}
          <div className="title__location">{rental[0].location}</div>
        </div>
        <div className="title__host">
          <div className="title__host__name">{rental[0].host.name}</div>
          <img
            src={rental[0].host.picture}
            alt="photo de profil de l'hébergeur"
          />
        </div>
      </div>
      <section className="tags-rating">
        <div className="tags">
          {rental[0].tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <Stars nb-stars={rental[0].rating}/>
      </section>
      <section className="description-equipment">
        
        <Collapse title="Description" text={<p>{rental[0].description}</p>}/>
        
        <Collapse title="Équipements" text={<ul>
              {rental[0].equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>}/>
      </section>
    </div>
  );
};

export default Lodging;

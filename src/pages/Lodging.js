import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Lodging = () => {
  let { id } = useParams();
  let [isExpanded1, setIsExpanded1] = useState(false);
  let [isExpanded2, setIsExpanded2] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("../../data/logements.json").then((res) => setData(res.data));
  }, []);

  console.log("data", data);
  let rental = data.filter((rental) => rental.id === id);

  function stars() {
    {
      for (let i = 1; i < 6; i++) {
        <img key={i} className="star" src='./img/star-red.svg' alt={i} />;
      }
    }
  }

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
          <div className="title__host__name">
            {rental[0].host.name}
            <img
              src={rental[0].host.picture}
              alt="photo de profil de l'hébergeur"
            />
          </div>
        </div>
      </div>
      <section className="tags-rating">
        <div className="tags">
          {rental[0].tags.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
        {/* <div className="rating">{stars()}</div> */}
      </section>
      <section className="description-equipment">
        <div
          className={isExpanded1 ? "dropdown dropdown--expanded" : "dropdown"}
          onClick={() => setIsExpanded1(!isExpanded1)}
        >
          <h2 className="dropdown__title">Description</h2>
          <div className="dropdown__content">
            <p>{rental[0].description}</p>
          </div>
        </div>
        <div
          className={isExpanded2 ? "dropdown dropdown--expanded" : "dropdown"}
          onClick={() => setIsExpanded2(!isExpanded2)}
        >
          <h2 className="dropdown__title">Équipements</h2>
          <div className="dropdown__content">
            <ul>
              {rental[0].equipments.map((equipment) => (
                <li>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lodging;

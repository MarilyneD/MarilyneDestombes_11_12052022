import React, { useState } from "react";

const Gallery = ({ rental }) => {
  let [counter, setCounter] = useState(0);

  function handleClickNext(e) {
    e.preventDefault();
    console.log("Le lien + a été cliqué.");
    if (counter === rental[0].pictures.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  function handleClickPrevious(e) {
    e.preventDefault();
    console.log("Le lien - a été cliqué.");
    if (counter === 0) {
      setCounter(rental[0].pictures.length - 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <section className="gallery">
      <img
        onClick={handleClickPrevious}
        className={
          rental[0].pictures.length === 1 ? "disappear" : "arrows previous"
        }
        src="../img/previous.svg"
        alt="photo précédente"
      />
      <img src={rental[0].pictures[counter]} alt="" />
      <img
        onClick={handleClickNext}
        className={
          rental[0].pictures.length === 1 ? "disappear" : "arrows next"
        }
        src="../img/next.svg"
        alt="photo suivante"
      />
      <div className="position">{counter+1}/{rental[0].pictures.length}</div>
    </section>
  );
};

export default Gallery;

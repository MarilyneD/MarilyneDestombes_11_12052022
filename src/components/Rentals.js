import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Rentals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./data/logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="rentals">
      <ul>
        {data.map((rental) => (
          <Card key={rental.id} rentalprops={rental} />
        ))}
      </ul>
    </section>
  );
};

export default Rentals;


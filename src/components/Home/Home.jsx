import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Contact from "../Contact/Contact";

import seedImage1 from '../../assets/seedcalculator1.jpg'
import cropImage1 from "../../assets/croppractice1.jpg";
import fertilizerImage1 from "../../assets/fertilizers4.jpg";
import organicImage1 from "../../assets/organic1.jpg";

function Home() {
  const navigate = useNavigate();

  const cardData = [
    { id: "Seed Calculator", title: "Seed Calculator", image: seedImage1 },
    { id: "Crop Practice", title: "Crop Practice", image: cropImage1 },
    { id: "Fertilizer Calculator", title: "Fertilizer Calculator", image: fertilizerImage1 },
    { id: "Organic Farming", title: "Organic Farming", image: organicImage1 },
  ];

  const handleOpenClick = (item) => {
    if (item === "Seed Calculator") {
      navigate("/seedcalculator");
    } else if (item === "Crop Practice") {
      navigate("/croppractice");
    } else if (item === "Fertilizer Calculator") {
      navigate("/fertilizer");
    } else if (item === "Organic Farming") {
      navigate("/organicfarming");
    } else {
      navigate(`/card/${item}`);
    }
  };

  return (
    <div className="home">
      <div className="cards">
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3>{item.title}</h3>
            <button
              className="open-button"
              onClick={() => handleOpenClick(item.id)}
            >
              Open
            </button>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}

export default Home;

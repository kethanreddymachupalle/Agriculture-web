import React from "react";
import { useParams } from "react-router-dom";
import "./Card.css";

function CardPage() {
  const { id } = useParams();
  return (
    <div className="card-page">
      <h1>Welcome to Page {id}</h1>
    </div>
  );
}

export default CardPage;

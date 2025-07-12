import React, { useState } from "react";
import "./Fertilizers.css";

function Fertilizers() {
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState("");

  const calculateFertilizer = () => {
    if (!crop || !area || isNaN(area)) {
      alert("Please select a crop and enter a valid area.");
      return;
    }

    let fertilizerQty = 0;

    // Simple dummy calculation — you can refine it
    switch (crop) {
      case "Wheat":
        fertilizerQty = area * 100;
        break;
      case "Rice":
        fertilizerQty = area * 120;
        break;
      case "Corn":
        fertilizerQty = area * 90;
        break;
      default:
        fertilizerQty = area * 110;
    }

    setResult(`You need ${fertilizerQty} kg of fertilizer for your ${area} acre ${crop} field.`);
  };

  return (
    <div className="fertilizer-container">
      <h1>Fertilizer Calculator</h1>

      <div className="form-group">
        <label>Select Crop:</label>
        <select value={crop} onChange={(e) => setCrop(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Corn">Corn</option>
          <option value="Corn">Cotton</option>
          <option value="Corn">Groundnut</option>
          <option value="Corn">Banana</option>
          <option value="Corn">Mango</option>
          <option value="Corn">Carrot</option>
          <option value="Corn">Vegetables</option>
          <option value="Corn">Leafy Greens</option>
          <option value="Corn">Others</option>
        </select>
      </div>

      <div className="form-group">
        <label>Enter Area (in acres):</label>
        <input
          type="number"
          placeholder="Enter area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>

      <button className="calc-button" onClick={calculateFertilizer}>
        Calculate
      </button>

      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default Fertilizers;

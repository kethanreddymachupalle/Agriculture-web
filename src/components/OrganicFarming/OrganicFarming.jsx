import React, { useState } from "react";
import "./OrganicFarming.css";
import fertilizerData from "./OrganicData.js";

function OrganicFarming() {
  const [selectedFertilizer, setSelectedFertilizer] = useState("");

  return (
    <div className="organic-container">
      <h1>Organic Farming Recommendations</h1>

      <div className="form-group">
        <label>Select a Chemical Fertilizer:</label>
        <select
          value={selectedFertilizer}
          onChange={(e) => setSelectedFertilizer(e.target.value)}
        >
          <option value="">-- Select --</option>
          {Object.keys(fertilizerData).map((fertilizer, idx) => (
            <option key={idx} value={fertilizer}>
              {fertilizer}
            </option>
          ))}
        </select>
      </div>

      {selectedFertilizer && (
        <div className="replacement-box">
          <h2>Organic Replacement:</h2>
          <p><strong>Replacement:</strong> {fertilizerData[selectedFertilizer].replacement}</p>
          <p><strong>How to Use:</strong> {fertilizerData[selectedFertilizer].usage}</p>
          <p><strong>When to Use:</strong> {fertilizerData[selectedFertilizer].time}</p>
          <p><strong>Extra Uses:</strong> {fertilizerData[selectedFertilizer].extraUses}</p>
          <p><strong>Effectiveness:</strong> {fertilizerData[selectedFertilizer].effectiveness}</p>
          <p><strong>Best for Crops:</strong> {fertilizerData[selectedFertilizer].bestCrops}</p>
        </div>
      )}
    </div>
  );
}

export default OrganicFarming;

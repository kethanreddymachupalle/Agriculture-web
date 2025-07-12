import React, { useState } from "react";
import "./CropPractice.css";
import cropData from "./CropData.js";

function CropPractice() {
  const [selectedCrop, setSelectedCrop] = useState("");

  return (
    <div className="practice-container">
      <h1>Crop Practice Guide</h1>

      <div className="form-group">
        <label>Select a Crop:</label>
        <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)}>
          <option value="">-- Select --</option>
          {Object.keys(cropData).map((crop, idx) => (
            <option key={idx} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>

      {selectedCrop && (
        <div className="crop-details">
          <h2>{selectedCrop}</h2>
          <p><strong>Soil Type:</strong> {cropData[selectedCrop].soil}</p>
          <p><strong>Water Requirement:</strong> {cropData[selectedCrop].water}</p>
          <p><strong>Best Season:</strong> {cropData[selectedCrop].season}</p>
          <p><strong>Fertilizer Advice:</strong> {cropData[selectedCrop].fertilizer}</p>
          <p><strong>Harvest Time:</strong> {cropData[selectedCrop].harvest}</p>
        </div>
      )}
    </div>
  );
}

export default CropPractice;

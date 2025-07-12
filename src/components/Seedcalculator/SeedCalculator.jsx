import React, { useState } from 'react';
import './SeedCalculator.css';

const SeedCalculator = () => {
  const [area, setArea] = useState('');
  const [rowSpacing, setRowSpacing] = useState('');
  const [plantSpacing, setPlantSpacing] = useState('');
  const [result, setResult] = useState(null);

  const calculateSeed = () => {
    if (area && rowSpacing && plantSpacing) {
      // Convert area to m² if needed
      const areaSqm = parseFloat(area);

      // Row & plant spacing in cm -> convert to meters
      const rowSpacingM = parseFloat(rowSpacing) / 100;
      const plantSpacingM = parseFloat(plantSpacing) / 100;

      // Number of plants per square meter
      const plantsPerSqm = 1 / (rowSpacingM * plantSpacingM);

      // Total plants
      const totalPlants = areaSqm * plantsPerSqm;

      // Assume 1 plant = 1 seed (simplification)
      setResult(Math.round(totalPlants).toLocaleString());
    } else {
      setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Seed Calculator 🌾</h1>
      <p>Enter your field details below to estimate the number of seeds needed.</p>

      <div className="form-group">
        <label>Field Area (in square meters):</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="e.g., 1000"
        />
      </div>

      <div className="form-group">
        <label>Row Spacing (in cm):</label>
        <input
          type="number"
          value={rowSpacing}
          onChange={(e) => setRowSpacing(e.target.value)}
          placeholder="e.g., 30"
        />
      </div>

      <div className="form-group">
        <label>Plant Spacing (in cm):</label>
        <input
          type="number"
          value={plantSpacing}
          onChange={(e) => setPlantSpacing(e.target.value)}
          placeholder="e.g., 20"
        />
      </div>

      <button onClick={calculateSeed}>Calculate</button>

      {result && (
        <div className="result">
          <h2>Estimated Seeds Needed: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default SeedCalculator;
import './App.css';
import React, { useState } from 'react';

function App() {
  const [windSpeed, setWindSpeed] = useState('');
  const [groundSpeed, setGroundSpeed] = useState('');
  const [trueAirspeed, setTrueAirspeed] = useState('');
  const [windDirection, setWindDirection] = useState('');

  const calculate = () => {
    const windSpeedKnots = parseFloat(windSpeed);
    const windDirectionDegrees = parseFloat(windDirection);
    const trueAirspeedKnots = parseFloat(trueAirspeed);

    const windComponent = windSpeedKnots * Math.cos((windDirectionDegrees / 180) * Math.PI);
    const groundSpeedKnots = trueAirspeedKnots + windComponent;

    setGroundSpeed(groundSpeedKnots.toFixed(2));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tailwind Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2">Wind Speed (knots):</label>
        <input
          type="number"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Wind Direction (degrees):</label>
        <input
          type="number"
          value={windDirection}
          onChange={(e) => setWindDirection(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">True Airspeed (knots):</label>
        <input
          type="number"
          value={trueAirspeed}
          onChange={(e) => setTrueAirspeed(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {groundSpeed && (
        <div className="mt-4">
          <label className="block mb-2">Ground Speed (knots):</label>
          <span>{groundSpeed}</span>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import CitySelection from "../components/CitySelection";
import VehicleSelection from "../components/VehicleSelection";
import ResultPage from "../components/ResultPage";

const App = () => {
  const [capturedCop, setCapturedCop] = useState(null);

  const handleCapture = (cop) => {
    if (cop) {
      setCapturedCop(cop);
    }
  };

  return (
    <div>
      <h1>Fugitive Capture Game</h1>
      {capturedCop === null ? (
        <>
          <CitySelection cop="Cop 1" onCapture={handleCapture} />
          <CitySelection cop="Cop 2" onCapture={handleCapture} />
          <CitySelection cop="Cop 3" onCapture={handleCapture} />
        </>
      ) : (
        <ResultPage capturedCop={capturedCop} />
      )}
    </div>
  );
};

export default App;

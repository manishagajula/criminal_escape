import "./App.css";
import { CitySelection } from "./components/CitySelection";
import { StartPage } from "./components/StartPage";
import { VehicleSelection } from "./components/VehicleSelection";
import { ResultPage } from "./components/ResultPage";
import { MobileCitySelection } from "./components/Mobile";

function App() {
  return (
    <div className="App">
      <CitySelection />
      {/* <div className="lg:ml-[250px] lg:mt-[100px]">
        <MobileCitySelection />
      </div> */}

      {/* <VehicleSelection /> */}
      {/* <StartPage /> */}
      {/* <ResultPage /> */}
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// export const CitySelection = () => {
//   const [selectedCity, setSelectedCity] = useState("");

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send selectedCity to backend
//     console.log("Selected city:", selectedCity);
//   };

//   return (
//     <div>
//       <h2>City Selection</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Select a city:
//           <select value={selectedCity} onChange={handleCityChange}>
//             <option value="">Select</option>
//             <option value="Yapkashnagar">Yapkashnagar</option>
//             <option value="Lihaspur">Lihaspur</option>
//             <option value="Narmis City">Narmis City</option>
//             <option value="Shekharvati">Shekharvati</option>
//             <option value="Nuravgram">Nuravgram</option>
//           </select>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// import React, { useState } from "react";

// export const CitySelection = ({ cop }) => {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [capturingCop, setCapturingCop] = useState("");
//   const [captureStatus, setCaptureStatus] = useState("");

//   const handleCitySelection = () => {
//     // Simulate fugitive's location
//     const fugitiveLocation = "Nuravgram";

//     // City distances
//     const cityDistances = {
//       Yapkashnagar: 60,
//       Lihaspur: 50,
//       NarmisCity: 40,
//       Shekharvati: 30,
//       Nuravgram: 20,
//     };

//     // Determine distance between selected city and fugitive's location
//     const distanceToTarget = cityDistances[selectedCity];
//     // Select suitable electric vehicle based on distance
//     const captureSuccess = distanceToTarget <= 120; // Assuming maximum range of EV SUV is 120 KM

//     let captureStatus = captureSuccess ? "Captured" : "Not captured";

//     setCaptureStatus(captureStatus);
//     setCapturingCop(captureSuccess ? cop : ""); // Set capturing cop's name if capture was successful
//   };

//   return (
//     <div>
//       <h2>City Selection for Cop {cop}</h2>
//       <select
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.target.value)}
//       >
//         <option value="">Select City</option>
//         <option value="Yapkashnagar">Yapkashnagar</option>
//         <option value="Lihaspur">Lihaspur</option>
//         <option value="Narmis City">Narmis City</option>
//         <option value="Shekharvati">Shekharvati</option>
//         <option value="Nuravgram">Nuravgram</option>
//       </select>
//       <input
//         type="text"
//         value={capturingCop}
//         placeholder="Capturing Cop's Name"
//         onChange={(e) => setCapturingCop(e.target.value)}
//       />
//       <button onClick={handleCitySelection}>Capture</button>
//       <p>Capture Status: {captureStatus}</p>
//       {captureStatus === "Captured" && (
//         <p>Capturing Cop's Name: {capturingCop}</p>
//       )}
//     </div>
//   );
// };

// import React, { useState } from "react";
// import ResultPage from "./ResultPage"; // Import the ResultPage component

// export const CitySelection = ({ cop }) => {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [capturingCop, setCapturingCop] = useState("");
//   const [captureStatus, setCaptureStatus] = useState("");

//   const handleCitySelection = () => {
//     // Simulate fugitive's location
//     const fugitiveLocation = "Nuravgram";

//     // City distances
//     const cityDistances = {
//       Yapkashnagar: 60,
//       Lihaspur: 50,
//       NarmisCity: 40,
//       Shekharvati: 30,
//       Nuravgram: 20,
//     };

//     // Determine distance between selected city and fugitive's location
//     const distanceToTarget = cityDistances[selectedCity];
//     // Select suitable electric vehicle based on distance
//     const captureSuccess = distanceToTarget <= 120; // Assuming maximum range of EV SUV is 120 KM

//     let captureStatus = captureSuccess ? "Captured" : "Not captured";

//     setCaptureStatus(captureStatus);
//     setCapturingCop(captureSuccess ? cop : ""); // Set capturing cop's name if capture was successful
//   };

//   return (
//     <div>
//       <h2>City Selection for Cop {cop}</h2>
//       <select
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.target.value)}
//       >
//         <option value="">Select City</option>
//         <option value="Yapkashnagar">Yapkashnagar</option>
//         <option value="Lihaspur">Lihaspur</option>
//         <option value="Narmis City">Narmis City</option>
//         <option value="Shekharvati">Shekharvati</option>
//         <option value="Nuravgram">Nuravgram</option>
//       </select>
//       <input
//         type="text"
//         value={capturingCop}
//         placeholder="Capturing Cop's Name"
//         onChange={(e) => setCapturingCop(e.target.value)}
//       />
//       <button onClick={handleCitySelection}>Capture</button>
//       {captureStatus && (
//         <ResultPage captureStatus={captureStatus} capturingCop={capturingCop} />
//       )}
//     </div>
//   );
// };

// import React, { useState } from "react";
// import VehicleSelection from "./VehicleSelection";

// export const CitySelection = ({ cop, onCapture }) => {
//   const [selectedCity, setSelectedCity] = useState("");

//   const handleCitySelection = () => {
//     // Simulate the location of the fugitive
//     const fugitiveLocation = "Nuravgram";

//     // City distances
//     const cityDistances = {
//       Yapkashnagar: 60,
//       Lihaspur: 50,
//       NarmisCity: 40,
//       Shekharvati: 30,
//       Nuravgram: 20,
//     };

//     // Determine distance between selected city and fugitive's location
//     const distanceToTarget = cityDistances[selectedCity];
//     // Simulate capture success if distance is less than or equal to 20 KM
//     const captureSuccess = distanceToTarget <= 20;

//     // Call the onCapture callback function with capture status and cop's name
//     onCapture(captureSuccess ? cop : null);
//   };

//   const submitForm = () => {};

import React, { useState, useReducer } from "react";
import { dataConstants } from "../constants/data_constants";
import { dataReducer, initialData } from "../reducer/data_reducer";
import axios from "axios";

// import { VehicleSelection } from "./VehicleSelection";
// import { StartPage } from "./StartPage";

export const CitySelection = () => {
  const [cop1City, setCop1City] = useState("Yapkashnagar");
  const [cop2City, setCop2City] = useState("Shekharvati");
  const [cop3City, setCop3City] = useState("Narmis City");

  const [cop1Vehicle, setCop1Vehicle] = useState("EV Bike");
  const [cop2Vehicle, setCop2Vehicle] = useState("EV Car");
  const [cop3Vehicle, setCop3Vehicle] = useState("EV SUV");

  const [getData, setGetData] = useReducer(dataReducer, initialData);
  const { GET_DATA } = dataConstants;

  const payload = {
    cops: [
      {
        name: "Cop 1",
        city: cop1City,
        vehicle: cop1Vehicle,
      },
      {
        name: "Cop 2",
        city: cop2City,
        vehicle: cop2Vehicle,
      },
      {
        name: "Cop 3",
        city: cop3City,
        vehicle: cop3Vehicle,
      },
    ],
  };

  const cities = [
    {
      name: "Yapkashnagar",
      distance: 60,
      imageURL:
        "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lihaspur",
      distance: 50,
      imageURL:
        "https://images.unsplash.com/photo-1673265736033-63d8140e9a99?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Narmis City",
      distance: 40,
      imageURL:
        "https://images.unsplash.com/photo-1519602911442-e535108312ff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shekharvati",
      distance: 30,
      imageURL:
        "https://images.unsplash.com/photo-1575032872568-cbda501dea3a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nuravgram",
      distance: 20,
      imageURL:
        "https://images.unsplash.com/photo-1434393493133-00c371247786?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const vehicles = [
    {
      kind: "EV Bike",
      range: 60,
      count: 2,
      imageURL:
        "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      kind: "EV Car",
      range: 100,
      count: 1,
      imageURL:
        "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      kind: "EV SUV",
      range: 120,
      count: 1,
      imageURL:
        "https://images.unsplash.com/photo-1598248691082-399c8bc5b6bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Function to get available cities for Cop 1
  function getCitiesForCop1() {
    return cities.filter(
      (city) => city.name !== cop2City && city.name !== cop3City
    );
  }

  // Function to get available cities for Cop 2
  function getCitiesForCop2() {
    return cities.filter(
      (city) => city.name !== cop1City && city.name !== cop3City
    );
  }

  // Function to get available cities for Cop 3
  function getCitiesForCop3() {
    return cities.filter(
      (city) => city.name !== cop1City && city.name !== cop2City
    );
  }

  // Handler for Cop 1 city selection
  const handleCop1CitySelection = (e) => {
    const selectedCity = e.target.value;
    setCop1City(selectedCity);
  };

  // Handler for Cop 2 city selection
  const handleCop2CitySelection = (e) => {
    const selectedCity = e.target.value;
    setCop2City(selectedCity);
  };

  // Handler for Cop 3 city selection
  const handleCop3CitySelection = (e) => {
    const selectedCity = e.target.value;
    setCop3City(selectedCity);
  };

  function getVehicleForCop1() {
    return vehicles.filter(
      (vehicle) => vehicle.kind !== cop2Vehicle && vehicle.kind !== cop3Vehicle
    );
  }

  // Function to get available cities for Cop 2
  function getVehicleForCop2() {
    return vehicles.filter(
      (vehicle) => vehicle.kind !== cop1Vehicle && vehicle.kind !== cop3Vehicle
    );
  }

  // Function to get available cities for Cop 3
  function getVehicleForCop3() {
    return vehicles.filter(
      (vehicle) => vehicle.kind !== cop1Vehicle && vehicle.kind !== cop2Vehicle
    );
  }

  const handleCop1VehicleSelection = (e) => {
    const selectedVehicle = e.target.value;
    setCop1Vehicle(selectedVehicle);
  };

  // Handler for Cop 2 vehicle selection
  const handleCop2VehicleSelection = (e) => {
    const selectedVehicle = e.target.value;
    setCop2Vehicle(selectedVehicle);
  };

  // Handler for Cop 3 vehicle selection
  const handleCop3VehicleSelection = (e) => {
    const selectedVehicle = e.target.value;
    setCop3Vehicle(selectedVehicle);
  };

  const handleStart = async () => {
    try {
      const response = await axios?.post(
        `http://127.0.0.1:3001/search`,
        payload
      );
      console.log({ response });
      if (response.status === 200) {
        setGetData({ type: GET_DATA, payload: response.data.result });
      }
    } catch (e) {
      console.error(e);
    }
  };

  console.log({ getData });
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-bold text-3xl text-white text-center p-4 mt-4 rounded-md backdrop-blur bg-white/30">
        Welcome to GamePlay!
      </h1>
      <form action="">
        <div className="flex flex-row items-center justify-between pt-10 pb-10">
          <div className="flex flex-col pl-10 items-center">
            <div className="flex items-center">
              <h2 className="font-bold text-2xl p-4 mb-4 text-white rounded-md backdrop-blur bg-white/30">
                City Selection for Cop 1
              </h2>
            </div>
            {cop1City && (
              <img
                src={
                  cities.find((city) => city.name === cop1City)?.imageURL || ""
                }
                alt="City"
                className="w-[400px] and h-[400px] rounded-lg shadow-lg shadow-cyan-100/50"
              />
            )}
            <div className="flex flex-col items-center">
              <select
                value={cop1City}
                onChange={handleCop1CitySelection}
                className="p-6 mt-8 border rounded-xl text-xl bg-black text-white shadow-cyan-500/50"
              >
                <option value="">Select City</option>
                {getCitiesForCop1().map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <h2 className="font-bold text-2xl text-white p-4 mb-4 rounded-md backdrop-blur bg-white/30">
                City Selection for Cop 2
              </h2>
            </div>
            {cop2City && (
              <img
                src={
                  cities.find((city) => city.name === cop2City)?.imageURL || ""
                }
                alt="City"
                className="w-[400px] and h-[400px] rounded-lg shadow-lg shadow-cyan-100/50"
              />
            )}
            <div className="flex flex-col items-center">
              <select
                value={cop2City}
                onChange={handleCop2CitySelection}
                className="p-6 mt-8 border rounded-xl text-xl bg-black text-white shadow-cyan-500/50"
              >
                <option value="">Select City</option>
                {getCitiesForCop2().map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                    <img
                      src={city.image}
                      alt="cityphoto"
                      height={100}
                      width={200}
                    />
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col items-center pr-10">
            <div>
              <h2 className="font-bold text-2xl text-white p-4 mb-4 rounded-md backdrop-blur bg-white/30">
                City Selection for Cop 3
              </h2>
            </div>
            <div className="flex">
              {cop3City && (
                <img
                  src={
                    cities.find((city) => city.name === cop3City)?.imageURL ||
                    ""
                  }
                  alt="City"
                  className="w-[400px] and h-[400px] rounded-lg shadow-lg shadow-cyan-100/50"
                />
              )}
            </div>
            <div className="flex flex-col items-center">
              <select
                value={cop3City}
                onChange={handleCop3CitySelection}
                className="p-6 mt-8 border rounded-xl text-xl bg-black text-white shadow-cyan-500/50"
              >
                <option value="">Select City</option>
                {getCitiesForCop3().map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-10 pt-10 pr-10 pl-10">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h2 className="font-bold text-2xl p-4 mb-4 text-white rounded-md backdrop-blur bg-white/30">
                Vehicle Selection for Cop 1
              </h2>
            </div>
            <div className="flex items-center justify-center">
              {cop1Vehicle && (
                <img
                  src={
                    vehicles?.find((vehicle) => vehicle?.kind === cop1Vehicle)
                      ?.imageURL
                  }
                  alt="Vehicle"
                  className="w-[400px] and h-[400px] rounded-lg shadow-lg shadow-cyan-100/50"
                />
              )}
            </div>
            <div className="flex flex-col items-center">
              <select
                value={cop1Vehicle}
                onChange={handleCop1VehicleSelection}
                className="p-6 mt-8 border rounded-xl text-xl bg-black text-white shadow-cyan-500/50"
              >
                <option value="">Select Vehicle</option>
                {getVehicleForCop1().map((vehicle) => (
                  <option key={vehicle.kind} value={vehicle.kind}>
                    {vehicle.kind}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-bold text-2xl p-4 mb-4 text-white rounded-md backdrop-blur bg-white/30">
                Vehicle Selection for Cop 2
              </h2>
            </div>
            <div className="flex items-center justify-center">
              {cop2Vehicle && (
                <img
                  src={
                    vehicles?.find((vehicle) => vehicle?.kind === cop2Vehicle)
                      ?.imageURL
                  }
                  alt="Vehicle"
                  className="w-[400px] and h-[400px] rounded-lg shadow-lg shadow-cyan-100/50"
                />
              )}
            </div>
            <div className="flex flex-col items-center">
              <select
                value={cop2Vehicle}
                onChange={handleCop2VehicleSelection}
                className="p-6 mt-8 border rounded-xl text-xl bg-black text-white shadow-cyan-500/50"
              >
                <option value="">Select Vehicle</option>
                {getVehicleForCop2().map((vehicle) => (
                  <option key={vehicle.kind} value={vehicle.kind}>
                    {vehicle.kind}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-bold text-2xl p-4 mb-4 text-white rounded-md backdrop-blur bg-white/30">
                Vehicle Selection for Cop 3
              </h2>
            </div>
            <div className="flex items-center justify-center">
              {cop3Vehicle && (
                <img
                  src={
                    vehicles.find((vehicle) => vehicle.kind === cop3Vehicle)
                      ?.imageURL
                  }
                  alt="Vehicle"
                  className="w-[400px] and h-[400px] rounded-lg shadow-lg shadow-cyan-100/50"
                />
              )}
            </div>
            <div className="flex flex-col items-center">
              <select
                value={cop3Vehicle}
                onChange={handleCop3VehicleSelection}
                className="p-6 mt-8 border rounded-xl text-xl bg-black text-white shadow-cyan-500/50"
              >
                <option value="">Select Vehicle</option>
                {getVehicleForCop3().map((vehicle) => (
                  <option key={vehicle.kind} value={vehicle.kind}>
                    {vehicle.kind}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleStart();
            }}
            className="border-2 rounded pr-10 pl-10 pt-2 pb-2 mb-6 text-white"
          >
            Start
          </button>
        </div>
        {/* <button type="submit">Capture</button> */}
        {/* <StartPage /> */}
      </form>
      {/* <div>{getData.finalData}</div> */}
      <div>
        {typeof getData.finalData === "object" ? (
          Object.values(getData.finalData).map((value, index) => (
            <p key={index}>{value}</p>
          ))
        ) : (
          <p className="text-white p-6 text-3xl rounded-md backdrop-blur bg-white/30">
            Result: {getData.finalData}
          </p>
        )}
      </div>
    </div>
  );
};

// export default CitySelection;

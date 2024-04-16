// // export const VehicleSelection = () => {
// //   const [selectedVehicle, setSelectedVehicle] = useState("");

// //   const handleVehicleChange = (e) => {
// //     setSelectedVehicle(e.target.value);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission, e.g., send selectedVehicle to backend
// //     console.log("Selected vehicle:", selectedVehicle);
// //   };

// //   return (
// //     <div>
// //       <h2>Vehicle Selection</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Select a vehicle:
// //           <select value={selectedVehicle} onChange={handleVehicleChange}>
// //             <option value="">Select</option>
// //             <option value="EV Bike">EV Bike</option>
// //             <option value="EV Car">EV Car</option>
// //             <option value="EV SUV">EV SUV</option>
// //           </select>
// //         </label>
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// import React, { useState } from "react";
// // import ResultPage from "./ResultPage";

// export const VehicleSelection = () => {
//   const [cop1Vehicle, setCop1Vehicle] = useState("");
//   const [cop2Vehicle, setCop2Vehicle] = useState("");
//   const [cop3Vehicle, setCop3Vehicle] = useState("");

//   const vehicles = [
//     { kind: "EV Bike", range: 60, count: 2 },
//     { kind: "EV Car", range: 100, count: 1 },
//     { kind: "EV SUV", range: 120, count: 1 },
//   ];

//   function getVehicleForCop1() {
//     return vehicles.filter(
//       (vehicle) => vehicle.kind !== cop2Vehicle && vehicle.kind !== cop3Vehicle
//     );
//   }

//   // Function to get available cities for Cop 2
//   function getVehicleForCop2() {
//     return vehicles.filter(
//       (vehicle) => vehicle.kind !== cop1Vehicle && vehicle.kind !== cop3Vehicle
//     );
//   }

//   // Function to get available cities for Cop 3
//   function getVehicleForCop3() {
//     return vehicles.filter(
//       (vehicle) => vehicle.kind !== cop1Vehicle && vehicle.kind !== cop2Vehicle
//     );
//   }

//   const handleCop1VehicleSelection = (e) => {
//     const selectedVehicle = e.target.value;
//     setCop1Vehicle(selectedVehicle);
//   };

//   // Handler for Cop 2 vehicle selection
//   const handleCop2VehicleSelection = (e) => {
//     const selectedVehicle = e.target.value;
//     setCop2Vehicle(selectedVehicle);
//   };

//   // Handler for Cop 3 vehicle selection
//   const handleCop3VehicleSelection = (e) => {
//     const selectedVehicle = e.target.value;
//     setCop3Vehicle(selectedVehicle);
//   };

//   return (
//     <div>
//       <h2>Vehicle Selection for Cop </h2>
//       <form action="">
//         <h2>Vehicle Selection for Cop 1</h2>

//         <select value={cop1Vehicle} onChange={handleCop1VehicleSelection}>
//           <option value="">Select Vehicle</option>
//           {getVehicleForCop1().map((vehicle) => (
//             <option key={vehicle.kind} value={vehicle.kind}>
//               {vehicle.kind}
//             </option>
//           ))}
//         </select>

//         <h2>Vehicle Selection for Cop 2</h2>
//         <select value={cop2Vehicle} onChange={handleCop2VehicleSelection}>
//           <option value="">Select Vehicle</option>
//           {getVehicleForCop2().map((vehicle) => (
//             <option key={vehicle.kind} value={vehicle.kind}>
//               {vehicle.kind}
//             </option>
//           ))}
//         </select>
//         <h2>Vehicle Selection for Cop 3</h2>
//         <select value={cop3Vehicle} onChange={handleCop3VehicleSelection}>
//           <option value="">Select Vehicle</option>
//           {getVehicleForCop3().map((vehicle) => (
//             <option key={vehicle.kind} value={vehicle.kind}>
//               {vehicle.kind}
//             </option>
//           ))}
//         </select>
//         {/* <button type="submit">Capture</button> */}
//       </form>
//     </div>
//   );
// };

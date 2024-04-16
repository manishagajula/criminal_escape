// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export const ResultPage = () => {
//   const [captureStatus, setCaptureStatus] = useState("");
//   const [capturingCop, setCapturingCop] = useState("");

//   useEffect(() => {
//     // Simulate API call to fetch capture status and capturing cop's name
//     axios
//       .get("/api/capture-info")
//       .then((response) => {
//         const { status, cop } = response.data;
//         setCaptureStatus(status);
//         setCapturingCop(cop);
//       })
//       .catch((error) => {
//         console.error("Error fetching capture info:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Result</h2>
//       <p>Capture Status: {captureStatus}</p>
//       <p>Capturing Cop's Name: {capturingCop}</p>
//     </div>
//   );
// };

// import React from "react";

// export const ResultPage = ({ capturedCop }) => {
//   return (
//     <div>
//       <h2>Result</h2>
//       {capturedCop ? (
//         <p>{capturedCop} successfully captured the fugitive!</p>
//       ) : (
//         <p>No cop has captured the fugitive yet.</p>
//       )}
//     </div>
//   );
// };

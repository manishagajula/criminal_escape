// import axios from "axios";
// import { useState } from "react";
// import { dataConstants } from "../constants/data_constants";

// export const StartPage = () => {
//   const [getData, setGetData] = useState("");

//   const { GET_DATA } = dataConstants;
//   const handleStart = async () => {
//     try {
//       const response = await axios?.post(
//         `http://127.0.0.1:3001/search`,
//         ,
//         {
//           headers: {
//             "Content-type": "application/json",
//           },
//         }
//       );
//       console.log({ response });
//       if (response.status === 200) {
//         setGetData({ type: GET_DATA, payload: response.data.result });
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to GamePlay!</h1>
//       <button onClick={() => handleStart()}>Start</button>
//     </div>
//   );
// };

// http://localhost:3000/search

// Import necessary modules
const express = require("express"); // Importing the Express framework
const bodyParser = require("body-parser"); // Middleware to parse incoming request bodies

const cors = require("cors"); // Import CORS middleware // Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Define data for cities and vehicles
const cities = [
  // Array of objects representing cities and their distances
  { name: "Yapkashnagar", distance: 60 },
  { name: "Lihaspur", distance: 50 },
  { name: "Narmis City", distance: 40 },
  { name: "Shekharvati", distance: 30 },
  { name: "Nuravgram", distance: 20 },
];

const vehicles = [
  // Array of objects representing vehicles and their ranges
  { type: "EV Bike", range: 20, count: 2 },
  { type: "EV Car", range: 10, count: 1 },
  { type: "EV SUV", range: 30, count: 1 },
];

// Define route to handle the game logic
app.post("/search", (req, res) => {
  // POST endpoint to handle the search request
  const cops = req.body.cops; // Array of objects containing city and vehicle chosen by each cop
  const fugitiveCityIndex = Math.floor(Math.random() * 5); // Randomly select the fugitive's hiding place

  let result = "Fugitive not found"; // Default result

  // Iterate through each cop's choice
  for (const cop of cops) {
    // Loop through each cop's choice
    const chosenCity = cities.find((city) => city.name === cop.city); // Find the chosen city object
    const chosenVehicle = vehicles.find(
      (vehicle) => vehicle.type === cop.vehicle
    ); // Find the chosen vehicle object
    console.log(
      `Chosen city: ${chosenCity.name}, Chosen vehicle: ${chosenVehicle.type}`
    );
    const distanceToFugitive = Math.abs(
      chosenCity.distance - cities[fugitiveCityIndex].distance
    ); // Calculate distance to fugitive's hiding place
    console.log(
      `Distance to fugitive: ${distanceToFugitive}, Vehicle range: ${chosenVehicle.range}`
    );

    // Check if the vehicle can cover the distance to the fugitive's hiding place
    if (chosenVehicle.range >= distanceToFugitive) {
      result = `${cop.name} successfully captured the fugitive in ${cities[fugitiveCityIndex].name}`;
      break; // Exit loop once a cop successfully captures the fugitive
    }
  }

  res.json({ result }); // Send the result as a JSON response
});

// Start the server
const port = 3001; // Port number for the server to listen on
app.listen(port, () => {
  // Start the server and listen for incoming requests
  console.log(`Server is running on port ${port}`); // Log a message when the server starts
});

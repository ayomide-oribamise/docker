// Import the Express framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send a response with a simple message
  res.send('Hello, this is a simple express app!');
});

// Set the port on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message indicating that the server is running
  console.log(`Server running at http://localhost:${port}/`);
});

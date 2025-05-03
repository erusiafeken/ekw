server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like index.html)
app.use(express.static('public'));

// Example POST route
app.post('/submit', (req, res) => {
    const { name } = req.body;
    console.log('Received name:', name);
    res.send(`Hello, ${name}! Your data was received.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve the cover page as the default landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cover.html'));
});

// Route for validating the selected date
app.post('/validate-date', (req, res) => {
    const { date } = req.body;
    const correctDate = '2022-08-05'; // Correct date

    if (date === correctDate) {
        res.status(200).send('Valid date');
    } else {
        res.status(401).send('Invalid date');
    }
});


// Main page route
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

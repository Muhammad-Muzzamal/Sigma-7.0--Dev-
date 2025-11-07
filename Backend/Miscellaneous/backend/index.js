const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.get('/reg', (req, res) => {
    res.send('Registration endpoint');
});
app.post('/reg', (req, res) => {
    res.send('Handle registration data');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
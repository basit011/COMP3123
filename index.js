const express = require('express');
const app = express();
const SERVER_PORT= 3000;


// GET /hello
app.get('/hello', function (req, res) {
    res.send("Hello Express JS")
});


// // GET /user
app.get('/user', (req, res) => {
    const firstName = req.query.firstname || "Pritesh";
    const lastName = req.query.lastname || "Patel";
    res.json({ firstname: firstName, lastname: lastName });
});


// POST /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstName = req.params.firstname;
    const lastName = req.params.lastname;
    res.json({ firstname: firstName, lastname: lastName });
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});

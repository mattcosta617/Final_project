const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/experts', (req, res) => {
    res.send("Fruits are awesome!");
});

app.get('/experts/:index', (req, res) => {
    res.send(fruits[req.params.index]);
});

app.listen(3000,() => {
    console.log('listening');
});
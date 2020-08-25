const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Routes defined
experts = require("./routes/experts");
languages = require("./routes/languages");
projects = require("./routes/projects");
users = require("./routes/users");


app.use(cors({
    origin: [`http://localhost:3000`],
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200 // some legacy browsers choke on satus 204
  }));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


// middleware - API routes
// Experts Routes
app.use('/api/v1/experts', experts);
// Users Routes
app.use('/api/v1/users', users);
// Languages Routes
app.use('/api/v1/languages', languages);
// Project Routes
app.use('/api/v1/projects', projects);

app.listen(PORT,() => {
    console.log(`listening at local host ${PORT}`);
});
const express = require('express')
const app = express();
const db = require('./db');
const cors = require("cors");
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
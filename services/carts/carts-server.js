const express = require('express');
const cors = require('cors'); 
const app = express();

// MIDDLEWARE
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));


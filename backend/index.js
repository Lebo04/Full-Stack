const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const db = require('./lib/db_connection');
const route = require('../backend/routes/routes.js'); 
const bodyParser = require("body-parser");
const port = parseInt(process.env.PORT) || 4000;
// const route = express.Router();

app.use(
  route,
  express.json(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended:true }),
  cors({
    origin: ["http://127.0.0.1","http://localhost:8080"],
    credentials: true,
  }),
  express.urlencoded(),
  express.static('views')
);
route.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./view/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// // import express
// import express from "express";
// // import cors
// import cors from "cors";

// const bodyParser = require('body-parser');

// // import routes
// import Router from "./routes/routes.js";

// // init express
// const app = express();

// // use express json
// app.use(express.json());

// // use cors
// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // use router
// app.use(Router);

// app.listen(5000, () => console.log('Server running at http://localhost:5000'));

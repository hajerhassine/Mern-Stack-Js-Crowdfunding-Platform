

const express = require('express');
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors =require("cors");
const bankingRoutes =require('./routes/bankingpartners.js')

var app = express();
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());

//routes
app.use('/bankingpartners', bankingRoutes);


app.use(bodyParser.json({limit :"30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit :"30mb" , extended : true}));



const CONNECTION_URL = 'mongodb+srv://lancini:lancini2022@lancinicluster.pnavc.mongodb.net/lanciniDatabase';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);



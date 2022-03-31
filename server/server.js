require("dotenv").config({path: "./config.env"});

const connectDB = require('./config/db');
const errorHandler=require('./middleware/error')
const cors=require('cors')
//connect DB 
connectDB();

const express = require("express");
const app = express();
app.use(cors())
app.use(express.json());
app.use(errorHandler);
app.use("/auth",require("./routes/auth"));
app.use("/private",require("./routes/private"));
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`));
process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged Error : ${err}`);
    server.close(()=>process.exit(1));
})
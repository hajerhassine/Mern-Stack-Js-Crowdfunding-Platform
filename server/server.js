'use strict';

require("dotenv").config({path: "./config.env"});
const socket = require('socket.io');
var QuestionRouter = require('./routes/routerquestions');
var CategoriesRouter = require('./routes/routercategories');
const connectDB = require('./config/db');
const errorHandler=require('./middleware/error')
const cors=require('cors')
const bankingRoutes =require('./routes/bankingpartners.js');
const eventsRouter = require('./routes/events.route');
const axios = require('axios');
const http = require('http');
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const projectRoutes = require( './routes/projectRoutes.js');
const path =require( 'path');
const uploadRoutes = require('./routes/uploadRoutes.js');
const uploadImageEvent = require('./routes/uploadImageEvent.js');

//connect DB 
connectDB();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin:"http://localhost:3000"}));

app.use('/api/events', eventsRouter);
app.use(express.json());
app.use(errorHandler);
app.use("/auth",require("./routes/auth"));
app.use("/api", require("./routes/routercategories"));
app.use("/api", require("./routes/routerquestions"));
app.use("/private",require("./routes/private"));
app.use('/bankingpartners', bankingRoutes);
app.use('/api/projects', projectRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/events/upload',uploadImageEvent)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`));
process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged Error : ${err}`);
    server.close(()=>process.exit(1));
})


// socket setup
const io = socket(server);
let interval;
io.on('connection', socket => {
    console.log(`socket connected, id = ${socket.id}`);
    if (interval) clearInterval(interval);
    interval = setInterval(() => getApiAndEmit(socket), 1000);
})

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get('http://127.0.0.1:5000/api/events');
        io.emit('events', res.data);
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};
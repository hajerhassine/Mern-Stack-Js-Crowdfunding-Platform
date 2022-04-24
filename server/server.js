'use strict';

require("dotenv").config({path: "./config.env"});
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
const { OAuth2Client } = require("google-auth-library");
var bodyParser = require('body-parser')
const projectRoutes = require( './routes/projectRoutes.js');
const path =require( 'path');

const uploadRoutes = require('./routes/uploadRoutes.js');
const banksuploadRoutes = require('./routes/banksuploadsRoutes.js');
const socket = require('socket.io');
const uploadImageEvent = require('./routes/uploadImageEvent.js');
const client = new OAuth2Client(
    "671697475830-un4oqehgrhenbc78jmlaogjs1gmilbvn.apps.googleusercontent.com"
  );
//connect DB 
connectDB();


app.use('/banks/upload',banksuploadRoutes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({origin:"http://localhost:3000"}));
app.use('/api/events', eventsRouter);
app.use(express.json());
const users = [];
function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}
app.post("/api/google-login", async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "671697475830-un4oqehgrhenbc78jmlaogjs1gmilbvn.apps.googleusercontent.com",
    });
  
    const { email } = ticket.getPayload();
    upsert(users, { email });
    res.status(201);
    res.json({ email, password: "123456789" });
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
  });

app.use(errorHandler);
app.use("/auth",require("./routes/auth"));
app.use("/api", require("./routes/routercategories"));
app.use("/api", require("./routes/routerquestions"));
app.use("/private",require("./routes/private"));
app.use('/bankingpartners', bankingRoutes);
app.use('/api/projects', projectRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/api/events/upload',uploadImageEvent)
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`));
process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged Error : ${err}`);
    server.close(()=>process.exit(1));
})


// // socket setup
// const io = socket(server);
// let interval;
// io.on('connection', socket => {
//     console.log(`socket connected, id = ${socket.id}`);
//     if (interval) clearInterval(interval);
//     interval = setInterval(() => getApiAndEmit(socket), 1000);
// })

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get('http://127.0.0.1:5000/api/events');
        io.emit('events', res.data);
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

//chat process
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      credentials:true
    }
  });
  io.on('connection',(socket)=> {
    console.log(socket.id);
  
    //recieving an event
    socket.on('join_room',(data)=> {
        socket.join(data)
        console.log("User Joined Room:" +data)
    })
   //create an event (2events exactly here )
    socket.on("send_message", (data)=> {
        console.log(data);
        socket.to(data.room).emit("recieve_message", data.content);
    })
  
    socket.on('disconnect',()=>{
        console.log('USER DISCONNECTED')
    })
  })
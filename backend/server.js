const https = require('https');
const path = require('path')
const fs = require('fs');
const cors = require('cors');

require('dotenv').config({path:__dirname+'./../.env'}); //in order to use dotenv, we have to configure it that way
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server

// initalize server
const ip = "192.168.1.9";
const port = 3000 //Save the port number where your server will be listening

const connectDB = require('./DB/connection');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Set the main route, and add the API URIs inside the component that is "required" (for instance add the API URIs in ./API/User.js for all the API calls related to users)
app.use(require('./API/Items'))
app.use(require('./API/Lanes'))
app.use(require('./API/Purchases'))
app.use(require('./API/Recommendations'))
app.use(require('./API/Users'))


// initalize connections (server & DB)
connectDB("mongodb+srv://quicc:Ni75sbXJNI0sZWQw@cluster0.0cpqzhx.mongodb.net/quicc-db?retryWrites=true&w=majority");


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on http://${ip}:${port}`)
});



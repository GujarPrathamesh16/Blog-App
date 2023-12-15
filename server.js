const express = require('express')
const cors  = require('cors')
const morgan = require('morgan')
const colors  = require('colors');
const dotenv = require('dotenv');
const { mongoose } = require('mongoose');
const connectDB = require('./config/db');


//env config
dotenv.config()

//router import 
const userRoutes = require('./routes/userRoutes')


//mongoDB connection
connectDB();

//rest objects
const app = express();


// middlewares ( written to tell to use the mentioned )
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use("/api/v1/user", userRoutes);
// app.use('/', require('./routes/userRoutes'))



const PORT = process.env.PORT || 8080
const DEV_MODE = process.env.DEV_MODE

app.listen(PORT, ()=>{
    console.log(`Server running on ${DEV_MODE} mode port ${PORT}`);
});

// exported modules 
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./server/routes/router');
const connectDB = require('./server/database/connections');



// instance of express 
const app = express();

// port on which server in running
dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 3000;

// log request using morgan 
app.use(morgan('tiny'));

// database connections 
connectDB();

// parse request to bodyParser 
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine 
app.set('view engine', 'ejs');

// load assets 
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

// use of router module 1st method  
app.use(router);
// use of router module without requiring above 2nd method
// app.use('/', require('./server/routes/router'))


// run server 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
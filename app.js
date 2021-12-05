const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const ordersRoutes = require('./routes/orders');
require('dotenv/config');

// middleware to use request body
app.use(bodyParser.json());

// middleware to use orders routes
app.use('/orders', ordersRoutes)


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database is connected');
});

app.listen(port, () => {
    console.log(`App is listening to the port ${port}`)
})
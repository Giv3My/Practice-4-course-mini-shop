const express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    cors = require('cors'),
    Item = require('./models/ItemModel'),
    Orer = require('./models/OrderModel'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shop_db');

app.use(cors());
app.use(express.json());

const routes = require('./routes/routes');
routes(app);

app.listen(port, () => {
    console.log("Server is running on port:", port)
})
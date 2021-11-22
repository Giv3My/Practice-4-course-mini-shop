const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    items: { type: Array },
    totalPrice: { type: Number },
});

module.exports = mongoose.model('Order', OrderSchema);
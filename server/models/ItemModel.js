const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    item: { type: String },
    price: { type: Number },
    src: { type: String }
});

module.exports = mongoose.model('Item', ItemSchema);
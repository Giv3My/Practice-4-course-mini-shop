const mongoose = require('mongoose'),
    Item = require('../models/ItemModel');

exports.createItem = (req, res) => {
    const newItem = new Item(req.body);

    newItem.save((err, item) => {
        if (err) res.send(err);

        res.json(item);
    });
}

exports.getItems = (req, res) => {
    Item.find((err, item) => {
        if (err) res.send(err);

        res.json(item);
    });
}

exports.getItem = (req, res) => {
    Item.findById(req.params.itemId, (err, item) => {
        if (err) res.send(err);

        res.json(item);
    });
}
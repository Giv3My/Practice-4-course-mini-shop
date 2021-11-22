const mongoose = require('mongoose'),
    Order = require('../models/OrderModel');

exports.createOrder = async (req, res) => {
    const body = req.body;

    const newOrder = await Order.create({ ...body })

    res.json(newOrder);
}

exports.getOrders = (req, res) => {
    Order.find((err, order) => {
        if (err) res.send(err);

        res.json(order);
    })
}

exports.deleteOrder = (req, res) => {
    Order.remove({ _id: req.params.orderId }, (err, order) => {
        if (err) res.status(404).send(err);

        res.status(200).json({ message: 'Order successfully deleted' });
    });
}

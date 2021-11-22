module.exports = (app) => {
    const ItemController = require('../controllers/ItemController');
    const OrderController = require('../controllers/OrderController');

    app.route('/items')
        .post(ItemController.createItem)
        .get(ItemController.getItems);

    app.route('/item/:itemId')
        .get(ItemController.getItem);

    app.route('/orders')
        .post(OrderController.createOrder)
        .get(OrderController.getOrders);

    app.route('/order/:orderId')
        .delete(OrderController.deleteOrder);
};

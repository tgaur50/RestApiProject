const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    order_id: {
        required: true,
        type: String,
        unique: true
    },
    item_name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    order_date: {
        type: String,
        default: Date.now
    },
    delivery_date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Orders', orderSchema);
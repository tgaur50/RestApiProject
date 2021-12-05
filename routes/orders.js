const express = require('express');
const Order = require('../model/orderModel');
const router = express.Router();

router.get('/list', async (req, res) => {
    try
    {
        const order = await Order.find({order_date: "2020/12/01"});
        res.json(order);
    }
    catch(err)
    {
        res.json({message: err});
    }
});
router.get('/search/:id', async (req, res) => {
    try
    {
        const orderWithSpecificId = await Order.find({order_id : req.params.id});
        res.json(orderWithSpecificId);
    }
    catch(err)
    {
        res.json({message: err});
    }
});

router.post('/create', async (req, res) => {
    const orderSaved = new Order({
        order_id: req.body.order_id,
        item_name: req.body.item_name,
        cost: req.body.cost,
        order_date: req.body.order_date,
        delivery_date: req.body.delivery_date
    });
    try
    {
        const savedOrder = await orderSaved.save();
        res.json(savedOrder);
    }
    catch(err)
    {
        res.json({message: err});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try
    {
        const orderRemoved = await Order.remove({order_id : req.params.id});
        res.json(orderRemoved);
    }
    catch(err)
    {
        res.json({message: err});
    }
})

router.patch('/update/:id', async (req, res) => {
    try
    {
        const updatedOrder = await Order.updateOne({order_id : req.params.id}, {$set: {delivery_date : req.body.delivery_date}});
        res.json(updatedOrder);
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;
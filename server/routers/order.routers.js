const express = require('express');
const orderController = require('../controller/order.controller');

const order =  express.Router();

order.post('/', orderController.createOrder);
     

module.exports =  order;
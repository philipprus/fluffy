const Order = require("../model/order.model");
const  {mongo} = require("mongoose");

const getOrders = async (query) => {
      try {
            const orders = await Order.find(query).exec();
            return orders;
      } catch (e) {
            console.log(e);
            throw Error("Error get orders");
      }
}

const getOrderById = async (id) => {
      try {
            const _id = new mongo.ObjectId(id);
            const order = await Order.findById({_id}).exec();
            return order;
      } catch (e) {
            console.log(e);
            throw Error("Error get orders");
      }
}


const create = async (order) => {
      try {
            const created = await Order.insertMany(order);
            return created;
      } catch (e) {
            console.log(e);
            throw Error("Error add order");
      }
}

const update = async (order) => {
      try {
        const _id = new mongo.ObjectId(order._id);
        const replaced = await Order.updateOne({_id}, {$set: order}).exec();
        return replaced;
      } catch (e) {
        // Log Errors
        throw Error("Error update Order");
      }
    };


module.exports = {create, getOrders, getOrderById, update};
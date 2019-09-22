const Order = require("../model/order.model");

const create = async (order) => {
      console.log(order);
      try {
            await Order.insertMany(order);
            console.log(order);
            return order;
      } catch (e) {
            console.log(e);
            throw Error("Error add order");
      }
}


module.exports = {create};
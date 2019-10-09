const Order = require("../model/order.model");

const create = async (order) => {
      try {
            await Order.insertMany(order);
            const count = await Order.count();
            return {count: count};
      } catch (e) {
            console.log(e);
            throw Error("Error add order");
      }
}


module.exports = {create};
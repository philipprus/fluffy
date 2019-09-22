const orderService = require('../service/order.service');

const createOrder = async (req, res) => {
  const order = req.body;
      try {
        const created = await orderService.create(order);
            return res.status(200).send(created);
          } catch (e) {
            console.log(e);
            return res.sendStatus(400);
          } 
}

module.exports =  { createOrder };

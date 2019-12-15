const orderService = require('../service/order.service');

const getOrders = async (req, res) => {
      try {
        const result = await orderService.getOrders({});
            return res.status(200).send(result);
          } catch (e) {
            console.log(e);
            return res.sendStatus(400);
          } 
}

const createOrder = async (req, res) => {
  const order = req.body;
  order["_id"] = undefined;
  try {
    const created = await orderService.create(order);
    return res.status(200).send(created);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  } 

}

const getOrderById = async (req,res) => {
  const id = req.params.id;
  try {
    const order = await orderService.getOrderById(id);
    return res.status(200).send(order);
  } catch (e) {
    return res.sendStatus(400);
  }
}

const updateOrder = async (req,res) => {
  const order = req.body;
  // console.log(order);
  // if(order.coupon && order.discount) {
  //   try {
  //     const giftCardAvailable = await giftCardService.checkAmountByCoupon(order.coupon, order.discount);
  //     if(!giftCardAvailable) return res.status(400).send({status: "error", msg: "Giftcard not true"});
  //     const replaced = await giftCardService.update({coupon: order.coupon, amount: order.discount});
  //     if (!replaced || !replaced.ok || !replaced.n) {
  //       return res.sendStatus(404);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     return res.sendStatus(400);
  //   }
  // }
  try { 
    const replaced = await orderService.update(order);
    if (!replaced || !replaced.ok || !replaced.n) {
      return res.sendStatus(404);
    }
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(400);
  }
} 

const checkOrder = async (req,res) => {
  const id = req.params.id;
  try {
    const order = await orderService.getOrderById(id);
    const status = order.status;
    return res.status(200).send(status);
  } catch (e) {
    return res.sendStatus(400);
  }
}

module.exports =  { createOrder, getOrders, getOrderById, updateOrder, checkOrder };

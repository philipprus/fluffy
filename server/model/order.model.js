const mongoose = require("mongoose");


const OrderSchema =  new mongoose.Schema({
      created: { type: Date, default: Date.now },
      photo: [{
            public_id: {
                  type: String,
                  required: [true]
            },
            secure_url: {
                  type: String,
                  required: [true]
            },
      }],
      style: {
            type: String,
            required: [true]
      },
      canvasSize: {
            type: String,
            required: [true]
      },
      canvasPosition: {
            type: String,
            required: [true]
      },
      comments: {
            type: String
      },
      extraPet: {
            type: Number,
            required: [true]
      },
      
      billingAddress_firstName: {
            type: String,
            required: [true]
      },
      billingAddress_lastName: {
            type: String,
            required: [true]
      },
      billingAddress_address: {
            type: String,
            required: [true]
      },
      billingAddress_address2: {
            type: String,
      },
      billingAddress_country: {
            type: String,
            required: [true]
      },
      billingAddress_zip: {
            type: Number,
            required: [true]
      },
      isAnotherShippingAddress: {
            type: Boolean,
            default: false
      },
      shippingAddress_firstName: {
            type: String,
      },
      shippingAddress_lastName: {
            type: String,
      },
      shippingAddress_address: {
            type: String,
      },
      shippingAddress_address2: {
            type: String,
      },
      shippingAddress_country: {
            type: String,
      },
      shippingAddress_zip: {
            type: Number,
      },
      isGift: {
            type: Boolean,
            default: false
      },
      addCard: {
            type: Boolean,
            default: false
      },
      addPaper: {
            type: Boolean,
            default: false
      },
      сongratulation: {
            type: String
      },
      payment_type: {
            type: String,
            required: [true]
      },
      payment_number: {
            type: String,
            required: [true],
            unique: [true]
      },
      payment_discription: {
            type: String
      }

},{
      versionKey: false // You should be aware of the outcome after set to false
    });

const Order =  mongoose.model('Order', OrderSchema, "orders");

module.exports = Order;
const uploadImage = require("./upload.routers");
const sendMail = require("./sendmail.routers");
const order = require("./order.routers");
const loginAPI = require("./login.routers");
const giftCardAPI = require('./giftcard.routers');
const routers = [
  {
    prefix: "/upload",
    router: uploadImage
  },
  {
    prefix: "/sendmail",
    router: sendMail
  },
  {
    prefix: "/order",
    router: order
  },
  {
    prefix: "/login",
    router: loginAPI
  },
  {
    prefix: "/giftCard",
    router: giftCardAPI
  }
];


module.exports = routers;
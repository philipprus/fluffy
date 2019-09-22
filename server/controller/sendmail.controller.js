const sendMailService = require('../service/sendMail.service');

const sendContactMail = async (req, res) => {
      console.log(req.body);
      try {
        const result = await sendMailService.sendContactMail(req.body);
            return res.status(200).send(result);
          } catch (e) {
            return res.sendStatus(400);
          } 
}

const sendOrderMail = async (req, res) => {
  console.log("send");
  try {
    const result = await sendMailService.sendOrderMail(req.body);
    return res.status(200).send(result);
  } catch(e) {
    console.log(e);
    return res.sendStatus(400);
  }
}

module.exports =  { sendContactMail, sendOrderMail };
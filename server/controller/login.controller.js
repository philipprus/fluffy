const loginService = require('../service/login.service');

const login = async (req, res) => {
  const data = req.body;
      try {
        const result = await loginService.authenticate(data);
            return res.status(200).send(result);
          } catch (e) {
            console.log(e);
            return res.sendStatus(400);
          } 
}

module.exports =  { login };

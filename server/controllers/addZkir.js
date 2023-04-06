const { addZkirQuiery } = require('../DB/queires');

const addZkir = (req, res) => {
  console.log(req.body)
  const { azkarText, description } = req.body;
  addZkirQuiery(azkarText, description)
    .then((result) => {
      console.log("result", result);
      return res.json(result.rows);
    })
    .catch((err) =>{
      console.log("err", err);
      return res.json(err);
    });
};

module.exports = addZkir;

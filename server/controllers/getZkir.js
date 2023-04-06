const { getZkirQuiery } = require("../DB/queires");

const getZkir = (req, res) => {
  const { azkarText, description } = req.body;
  getZkirQuiery(azkarText, description)
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.log("err", err);
      return res.json(err);
    });
};

module.exports = getZkir;

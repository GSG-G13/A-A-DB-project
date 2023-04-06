const connection = require('../config/connection');

const getZkir = () => {
  const sql = {
    text: 'select zkir from azkar',
  };
  return connection.query(sql);
};
module.exports = getZkir;

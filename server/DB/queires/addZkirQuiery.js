const connection = require('../config/connection');

const addZkir = (zkir, discription) => {
  const sql = {
    text: 'INSERT INTO azkar (zkir, description) VALUES ($1, $2) RETURNING *',
    values: [zkir, discription],
  };
  return connection.query(sql);
};
module.exports = addZkir;

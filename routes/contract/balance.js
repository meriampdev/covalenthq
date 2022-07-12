const axios = require("../../helpers/axios")

/* GET users listing. */
const route = async function(req, res) {
  const { address } = req.params

  const get = await axios.get(`address/${address}/balances_v2`)

  res.send({ ...get.data });
}

module.exports = route;

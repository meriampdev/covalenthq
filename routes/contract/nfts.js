const axios = require("../../helpers/axios")

/* GET users listing. */
const route = async function(req, res) {
  const { address } = req.params

  const get = await axios.get(`tokens/${address}/nft_token_ids`)

  res.send({ ...get.data });
}

module.exports = route;

const axios = require("../../helpers/axios")

/* GET users listing. */
const route = async function(req, res) {
  const { contract, tokenid } = req.params

  const get = await axios.get(`tokens/${contract}/nft_transactions/${tokenid}`)

  res.send({ ...get.data });
}

module.exports = route;

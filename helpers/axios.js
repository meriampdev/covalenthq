const axios = require("axios")

const chainId=80001 // Polygon-Mumbai Chain Id
module.exports = {
  get: (route) => {
    return axios.get(`https://api.covalenthq.com/v1/${chainId}/${route}/?&key=${process.env.COVALENTHQKEY}`)
  }
}
const random = require('lodash.random')
const { STAT_NAMES, IVS } = require('./constants')

const generateIvs = () =>
  STAT_NAMES.reduce((stats, statName) => ({
    ...stats,
    [statName]: random(IVS.MAX),
  }), {})

module.exports = {
  generateIvs,
}
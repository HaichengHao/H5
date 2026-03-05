const dayjs = require('dayjs')
const nowDateStr = dayjs()
console.log(nowDateStr.format('YYYY-MM-DDTHH:mm:ssZ'))

const _  = require('lodash')
console.log(_.max([1,5,66,32]))
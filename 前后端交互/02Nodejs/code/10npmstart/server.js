const dayjs = require('dayjs')  
const nowDateStr = dayjs()  

console.log(nowDateStr)
/**
 * M {
  '$L': 'en',
  '$d': 2026-03-04T02:06:14.282Z,
  '$y': 2026,
  '$M': 2,
  '$D': 4,
  '$W': 3,
  '$H': 10,
  '$m': 6,
  '$s': 14,
  '$ms': 282,
  '$x': {},
  '$isDayjsObject': true
}
 */
console.log(nowDateStr.format('YYYY-MM-DD'))
// 2026-03-04
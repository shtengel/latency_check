const { default: axios } = require("axios")
const percentile = require("percentile");

let counter = 0
let sum = 0
let values = []

setInterval(async () => {
    const a = performance.now()
    const data = await axios.get("https://www.mexc.com/open/api/v2/market/depth?symbol=ETH_USDT&depth=100")
    sum += performance.now() - a
    counter = counter + 1
    values.push(performance.now() - a)
    console.log(`time to fetch orderbook ${performance.now() - a} millis`)
}, 2000)

setInterval(() => {
    console.log(`average time to fetch (1min): ${sum / counter} millis`)
    console.log(`${95}% percentile is: ${percentile(95, values)}`)
}, 1000 * 60)

const { default: axios } = require("axios")

let counter = 0
let sum = 0

setInterval(async () => {
    const a = performance.now()
    const data = await axios.get("https://www.mexc.com/open/api/v2/market/depth?symbol=ETH_USDT&depth=100")
    sum += performance.now() - a
    counter = counter + 1
    console.log(`time to fetch orderbook ${performance.now() - a} millis`)
}, 2000)

setInterval(() => {
    console.log(`average time to fetch (1min): ${sum / counter} millis`)
}, 1000 * 60)

const os = require('os')
const userInfo = os.userInfo()
console.log(userInfo)

console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMemory: os.freemem(),
    totalMemory:os.totalmem()
}

console.log(currentOS)
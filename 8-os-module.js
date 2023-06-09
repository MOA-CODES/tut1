//built in modules

const os = require('os')

//info about current user
const user = os.userInfo()

console.log(`info about current user ${user}`)
console.log(`system uptime ${os.uptime()}`)

const moreosInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    platform: os.platform(),
    version: os.version(),
    //cpu: os.cpus(),
}

console.log(moreosInfo)
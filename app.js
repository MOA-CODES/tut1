//3-modules separate files or code
//encapsulation
const names = require('./4-firstmodule')
const sayHi = require('./5-secondmodule')

console.log(names)

sayHi('philip')
sayHi(names.harry)
sayHi(names.john)

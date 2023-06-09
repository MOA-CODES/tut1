//built in modules

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath) //normalised path

const base = path.basename(filePath)
console.log(base) //last path folder were entering

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute) 

// paths in different systems are different
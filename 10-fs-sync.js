//built in modules - file system(fs)

const {readFileSync, writeFileSync} = require('fs'); //destructuring the particular ones we want

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8'); //by default its utf8 but you can specify like we did
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// writeFileSync('./content/result-sync.txt', `My Mix1 playlist has these songs: \n ${first}\n ${second}`) //overwrites
writeFileSync(
    './content/result-sync.txt', 
    ` DONT SHUFFLE: \n  ${first}\n  ${second}`,
    {flag: 'a'}
)//appends

console.log('done with this task')
console.log('starting the next task')


// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];
// const newitems = _.flattenDeep(items);
// console.log(newitems);
// console.log("whats up"); 

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})

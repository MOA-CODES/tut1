var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)//pushes from read stream to writestream
    })//instead of sending in one large file like before were now sending in chunks
    fileStream.on('error', (err) => {
      res.end(err)
    }) 
  })
  .listen(5000)

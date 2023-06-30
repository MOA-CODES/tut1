const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark: 90000});

stream.on('data', (result)=>{
  console.log(result)
})
stream.on('error',(err)=> console.log(err))
//bydefault size of buffer is 64kb
//highwatermark changes bufeer size from default to what you want 
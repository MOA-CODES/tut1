const { log } = require('console');
const {readFile,writeFile} = require('fs').promises //shortening, removing the need for line 3-5
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

  const start = async()=>{
    try{
      const first = await readFile('./content/first.txt', 'utf8');
      const second = await readFile('./content/second.txt', 'utf8');
      await writeFile('./content/result-mind-grenade.txt',`My songs: \n ${first} ${second}`,{flag: 'w+'});
      log(first,second); //same as console.log because of line 1
    }
    catch(error){
      console.log(error);
    }
  
  }

  start(); 


// const getText = (path)=>{ //this is now the readfilepromise
//   return new Promise((resolve, reject)=>{
//     readFile(path,'utf8',(err, data)=>{
//       if(err){
//         reject(err);
//       }else{
//         resolve(data)
//       }
//       })
//   })
// }
 // getText('./content/first.txt')
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))


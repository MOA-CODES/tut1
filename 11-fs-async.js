//built in modules - file system(fs) - asynchronous

const {readFile, writeFile} = require('fs'); //destructuring the particular ones we want

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => { //example of callback hell
    if(err){
        console.log(err)
        return
    }
    const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if(err){
                console.log(err)
                return
            }
            const second = result;

            writeFile(
                './content/result-async.txt', 
                `MIX1\n DONT SHUFFLE\n  ${first} \n  ${second}`,
                {flag: 'a'},
                (err, result) => {
                    if(err){
                        console.log(err)
                        return;
                    }
                    console.log("done with this task")
                }
            )
        })
})
console.log("starting next task") 
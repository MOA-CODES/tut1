//built in modules - HTTP
const http = require('http');

const server = http.createServer((req, res)  =>{
    if(req.url === '/'){
        res.end(`Welcome to our home page\n </p><a href="/"> go to the homepage</a> \n </p><a href="/about"> go to the about</a> `)
    }
    if(req.url === '/about'){
        res.end('learning against freelance')
    }
    
    res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/"> go to the homepage</a>`)
    
})

server.listen(8020)
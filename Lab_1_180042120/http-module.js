const http = require('http')

const server = http.createServer((req,res)=>{
    /*res.writeHead(201,{'Content-Type':'text/html'})
    // res.write(`<h1>This is a header</h1>`)
    res.end(`<h1>This is a header</h1>`)*/

    if(req.url==='/'){
        res.write('<h1>This is base</h1>')
    }else if(req.url==='/home'){
        res.write('<h1>This is home</h1>')
    }else  res.write('<h1>This doesnt exist.</h1> <a href="/">Goto base</a>')

    res.end()
})
module.exports = {server}

console.log(module.exports)
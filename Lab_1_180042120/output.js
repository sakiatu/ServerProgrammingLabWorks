const data = require('./loadContents');
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/")
        res.write(data.data.index)
    else if (req.url === "/about")
        res.write(data.data.about)

    else if (req.url === "/blog")
        res.write(data.data.blog)

    else if (req.url === "/contact")
        res.write(data.data.contact)

    else if (req.url === "/pricing")
        res.write(data.data.pricing)

    else if (req.url === "/services")
        res.write(data.data.services)

    else if (req.url === "/work")
        res.write(data.data.work)
    else
        res.write("<h1>It doesn't Exist</h1>")
    res.end()

});

module.exports = {server};
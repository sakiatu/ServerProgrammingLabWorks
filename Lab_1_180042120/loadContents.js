//file system module
const fs = require('fs')
const about=fs.readFileSync("./content/HTML/about.html", "utf-8");
const blog=fs.readFileSync('./content/HTML/blog.html', "utf-8");
const contact=fs.readFileSync("./content/HTML/contact.html", "utf-8");
const index=fs.readFileSync("./content/HTML/index.html", "utf-8");
const pricing=fs.readFileSync("./content/HTML/pricing.html", "utf-8");
const service=fs.readFileSync("./content/HTML/services.html","utf-8");
const work=fs.readFileSync("./content/HTML/work.html","utf-8");
const data={
    'about':about,
    'blog':blog,
    'contact':contact,
    'index':index,
    'pricing':pricing,
    'services':service,
    'work':work
}

module.exports={data}

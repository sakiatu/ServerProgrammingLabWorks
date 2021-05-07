//file system module

const fileSys = require('fs')

fileSys.writeFileSync("./content/demo.txt", "this is a demo")
fileSys.appendFileSync("./content/demo.txt", " and this is extended text")

fileSys.rename("./content/demo.txt", "./content/demoRenamed.txt", (e) => {

    e ? console.log(e) : console.log('successful')
})
/*
fileSys.readFile("./content/demoRenamed.txt",'utf-8', (e, data) => {
    e ? console.log(e) : console.log(data)
})*/
console.log('---before---')
fileSys.readFile("./content/demoRenamed.txt",'utf-8', (e, data) => {
    e ? console.log(e) : fileSys.appendFileSync("./content/demoRenamed.txt", "Hello world i m here. ")
})
console.log('---after---')




//delete file

fileSys.uplink("./content/demoRenamed.txt",(e)=>{
    if(!e) console.log('successfully deleted')
})

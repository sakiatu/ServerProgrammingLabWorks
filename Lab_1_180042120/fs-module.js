//file system module

const fileSys = require('fs')

fileSys.writeFileSync("./contents/demo.txt", "this is a demo")
fileSys.appendFileSync("./contents/demo.txt", " and this is extended text")

fileSys.rename("./contents/demo.txt", "./contents/demoRenamed.txt", (e) => {

    e ? console.log(e) : console.log('successful')
})
/*
fileSys.readFile("./contents/demoRenamed.txt",'utf-8', (e, data) => {
    e ? console.log(e) : console.log(data)
})*/
console.log('---before---')
fileSys.readFile("./contents/demoRenamed.txt",'utf-8', (e, data) => {
    e ? console.log(e) : fileSys.appendFileSync("./contents/demoRenamed.txt", "Hello world i m here. ")
})
console.log('---after---')




//delete file

fileSys.uplink("./contents/demoRenamed.txt",(e)=>{
    if(!e) console.log('successfully deleted')
})

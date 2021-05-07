const helloWorld = require('./helloWorld')

helloWorld.hello()
setInterval(()=>{
    console.log(helloWorld.name)
},1000)

setTimeout(()=>{
    console.log('timeOut brother')
},2000)

//--- Modules ---
//1.Local Module (local machine modules)
//2.Global Module (like 'fs','os' that comes with node)
//3.Package/3rd party Module (need to externally install using npm)
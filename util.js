const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

function writedata(filepath,content){
    console.log("success")
fs.writeFileSync(filepath,JSON.stringify(content),'utf8',(err)=>{
    if(err){
        console.log(err)
    }
    
})
}

function getPostData(req){
    return new Promise((resolve,reject)=>{
        try {
            let body =''
               req.on('data',(chunk)=>{
                   body += chunk.toString()
               })
               req.on('end',()=>{
                   resolve(body)
               })
        } catch (error) {
            reject(err)
        }
    })

}

module.exports = {
    writedata,
    getPostData
}
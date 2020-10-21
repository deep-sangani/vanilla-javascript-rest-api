const products = require('../data/products.json')
const {v4:uuid} = require('uuid')
const {writedata} = require('../util')

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(products)
    })
        
    }


function findById(id){
    return new Promise((resolve,reject)=>{
        const product = products.find((p)=>p.id === id)
        resolve(product)
    })
        
    }

function create(product){
        return new Promise((resolve,reject)=>{
            const newProduct = {id:uuid(),...product}
            products.push(newProduct)
            writedata('./data/products.json',products)
            resolve(newProduct)
        })
            
        }

function update(id,product){
    return new Promise((resolve,reject)=>{
  const index = products.findIndex((p)=>p.id === id)
   products[index] = {id,...product}
   console.log(products)
    writedata('./data/products.json',products)
    resolve(products[index])
    })
                
}

function deleteitem(id){
 return new Promise((resolve,reject)=>{
              const updateddata = products.filter((p)=>p.id != id)
             
               console.log(updateddata)
                writedata('./data/products.json',updateddata)
                resolve()
                })
                            
                        }
    


module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteitem
}

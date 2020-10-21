const Products = require('../models/productModel')


//@desc Gets All Products
//@route GET /api/product
async function getProducts(req,res){
    try{
        const products = await Products.findAll()
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))

    }catch(error){
        console.log(error)
    }
}


//@desc Gets Product by id
//@route GET /api/product/:id
async function getProduct(req,res,id){
    try{
        
        const products = await Products.findById(id)

        if(!products){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:"product is not found"}))
        }else{
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(products))
        }
        

    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct
}
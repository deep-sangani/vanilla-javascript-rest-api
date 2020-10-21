const Products = require('../models/productModel')
const {getPostData} = require('../util')

//@desc Gets All Products
//@route GET /api/product
async function getProducts(req,res){
    try{
        const products =Products.findAll()
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


//@desc create product
//@route POST /api/product
async function createProduct(req,res){
    try{
        const body = await getPostData(req)
        const {name,description,price} = JSON.parse(body)
      
       const product = {
        name,
        description,
        price
    }
    const newProduct = Products.create(product)
    res.writeHead(201,{'Content-Type':'application/json'})
    return res.end(JSON.stringify(newProduct))
       

    }catch(error){
        console.log(error)
    }
}


//@desc update product
//@route PUT /api/product/:id
async function updateProduct(req,res,id){
    try{
    const product = await Products.findById(id)

        if(!product){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:"product is not found"}))
        }else{
            const body = await getPostData(req)
            const {name,description,price} = JSON.parse(body)
          
           const updateproduct = {
            name: name || product.name,
            description : description || product.description,
            price:price || product.price
        }
        const newProduct = await Products.update(id,updateproduct)
        res.writeHead(201,{'Content-Type':'application/json'})
        return res.end(JSON.stringify(newProduct))
           
        }
       

    }catch(error){
        console.log(error)
    }
}


//@desc delete product
//@route DELETE /api/product/:id
async function deleteProduct(req,res,id){
    try{
    const product = await Products.findById(id)

        if(!product){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:"product is not found"}))
        }else{
          
        
         await Products.deleteitem(id)
        res.writeHead(201,{'Content-Type':'application/json'})
        return res.end(JSON.stringify({msg:"item deleted successfully"}))
           
        }
       

    }catch(error){
        console.log(error)
    }
}
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
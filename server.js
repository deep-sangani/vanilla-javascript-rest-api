const http = require('http')
const {getProducts,getProduct} = require('./controller/productController')
const server = http.createServer((req,res)=>{

    if(req.url === '/api/products' && req.method === 'GET'){
        getProducts(req,res)
    }else if(req.url.match(/\/api\/product\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]
        getProduct(req,res,id)
    }else{
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'Route Not Found'}))
    }

})
const PORT = process.env.PORT || 3300
server.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`)
});
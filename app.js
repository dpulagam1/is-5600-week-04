const path = require('path')
const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(__dirname + '/public'));
app.use(middleware.cors)
app.use(bodyParser.json())

app.use(middleware.cors)
app.get('/', api.handleRoot)
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)
app.post('/products', api.createProduct)
app.delete('/products', api.deleteProduct)
app.put('/products', api.updateProduct)

// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const hostname = '127.0.0.1'
const port = 3000

const _products = [
  { id: 1, title: 'iPad Pro', price: 800.01 },
  { id: 2, title: 'iPhone', price: 1000.99 },
  { id: 3, title: 'iPhone X', price: 1900.99 }
]

app.use(express.json())

app.get('/products', (req, res) => {
  res.status(200).json(_products)
})

app.post('/checkout', (req, res) => {
  res.status(200).json({
    success: Math.random() > 0.5
  })
})

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})

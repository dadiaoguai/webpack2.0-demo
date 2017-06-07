const express = require('express')
, router = express.Router()
, fs = require('fs')
, path = require('path')
, webpackDevMiddleware = require('webpack-dev-middleware')
, webpack = require('webpack')
, webpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(webpackConfig())

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./index.html'))
})

app.listen(3000, () => {
  console.log('listen on port 3000!')
})

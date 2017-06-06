
module.exports = {
  entry: './src/index-es2015.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2105', {modules: false}]],
            plugins: [
              'syntax-dynamic-import',
              'transform-async-to-generator',
              'transform-regenerator',
              'transform-runtime'
            ]
          }
        }
      }
    ]
  }
}
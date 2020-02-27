const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
}

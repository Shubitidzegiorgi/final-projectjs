const path = require("path");

module.exports = {
    entry : './index.js',
    output : {
        path:path.resolve(__dirname,'./stacked.js'),
        filename: 'stacked.js'
    }
}
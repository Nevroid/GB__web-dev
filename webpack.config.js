const path = require('path')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/JS/main.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                }, 
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },

            ],},
            


            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }}
        ],
    },



}
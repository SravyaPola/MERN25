let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'), //to load the index html file on request
//With historyApiFallback, the server instead redirects the request to the main HTML page (index.html),
//ensuring that 404 errors don't break the app's client-side routing. 
config = {
    output: {
        path: path.join(__dirname, '/dist'), //dist - distribution
        filename: 'bundle.js' //the file name will be bundle.js
    },
    devServer: {
        port: 9090, //localhost:9090
        historyApiFallback : true //localhost:9090/user
    },
    module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader'//transpilation
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    exclude: /node_modules/,
                    type: 'asset/resource',
                }
            ]
        },
     plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] //localhost:9090 - loads this html

}
module.exports = config;
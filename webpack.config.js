const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        //to clean up stuff that is not needed now
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            //title: sets title of HTML file in dist
            title: 'Title Test',
            template: 'src/index.html',
        }),
    ],
    watch: true,

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};
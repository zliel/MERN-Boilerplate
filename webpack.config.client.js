const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    //mode sets process.env.NODE_ENV to the value and tells webpack to use its built-in optimizations accordingly (defaults to "production")
    mode: "development",
    //devtool specifies how source maps are generated (if at all). provides a way of mapping code within a compressed file back to its original position (helps with debugging)
    devtool: 'eval-source-map',
    //entry specifies the entry file where Webpack starts the bundle (main.js in the client folder, in this case)
    entry: [
        'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    //output specifies the output path for the bundled code (dist/bundle.js in this case)
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        //publicPath specifies the base path for all assets in the app
        publicPath: '/dist/'
    },
    //module sets the regex rule for the file extension to be used for transpiling, what folders to use, and what tool to use (in that order, in this case)
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        //HotModuleReplacementPlugin enables hot module replacement for react-hot-loader
        new webpack.HotModuleReplacementPlugin(),
        //NoEmitOnErrorsPlugin skips emitting when there are compiling errors
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        //Webpack alias points 'react-dom' references to the @hot-loader/react-dom version
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
}

module.exports = config
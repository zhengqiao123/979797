const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
   // entry: path.resolve(__dirname,'src/index.js'),
   entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module:{
        rules:[
           
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //css
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192*100,
                            name:'[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/public/index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { 
                from: path.resolve(__dirname,'src/public'),
                to:path.resolve(__dirname,'dist'),
                ignore:['index.html']
            },
        ]),
    ],


    mode:'development' ,
    
    devServer:{
        port:8080,
        open:true,//自动打开浏览器
        quiet:true,//输出少量的提示信息
    },
    devtool:'cheap-module-eval-source-map',//定位出错在原始代码行
    
    resolve:{
        extensions: [".js", ".json",".vue"]
    }
}

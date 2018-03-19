const path = require("path");
const webpack = require("webpack");
const config = require("../config");
const app_env = process.env.NODE_ENV;
const HTMLPlugin = require("html-webpack-plugin");

const webpack_config = {
    target:"web",
    entry:path.join(config.path.rootpath,"src/index.js"),
    output:{
        filename:"bundle.js",
        path:path.join(config.path.rootpath,"/dist")
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.jsx$/,
                loader:"babel-loader"
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        //配置全局变量
        new webpack.DefinePlugin({
            'app_environment':app_env
        }),
        //配置html-webpack-plugin
        new HTMLPlugin()
    ]
}
//开发环境
//配置dev
if(app_env == "development"){
    webpack_config.devtool = "#cheap-module-eval-source-map"
    webpack_config.devServer = {
        port:"8080",
        host:"0.0.0.0",
        //在网页上显示所有错误
        overlay:{
            errors:true
        },
        //热加载
        hot:true
    }
    //配置热加载
    webpack_config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
}


module.exports = webpack_config;
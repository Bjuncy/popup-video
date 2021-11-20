const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const glob = require('glob');
const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/*.ts`);
    for(let file of files) {
        const component = file.split(/[/.]/)[2];
        list[component] = `./${file}`;
    }
}

makeList('src/components', list);

module.exports = {
    entry: list,
    output: {
        publicPath: '../',
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'popupVideo',
        libraryTarget: 'umd'
    },
    mode: 'development',
    resolve: {
        "extensions": ['.ts', '.js', '.json']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude: [
                    path.resolve(__dirname, 'src/components')
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        url: true,
                        modules: {
                            mode: (resourcePath) => {
                                if (/iconfont.css$/i.test(resourcePath)) {
                                  return "global";
                                } else {
                                    return "local";
                                }
                            },
                            localIdentName: '[name]__[local]--[hash:base64:5]', // 自动生成class名字
                        }
                    }
                }],
                include: [
                    path.resolve(__dirname, 'src/components')
                ]
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[name]--[hash].[ext]',
                        outputPath: 'images/'
                    }
                }
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}
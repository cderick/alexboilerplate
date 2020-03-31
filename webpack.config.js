const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OUTPUT_DIR = path.join(__dirname, 'build')
const SOURCE_DIR = path.join(__dirname, 'src')
const { env } = process

const common = {
    mode: env.NODE_ENV,
    entry: {
        index: ['babel-polyfill', './src/index.jsx']
    },
    output: {
        path: OUTPUT_DIR,
        filename: 'scripts/bundle-[name]-[hash].js'
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [SOURCE_DIR],
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader?name=[name].[ext]&outputPath=fonts/'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: path.join(__dirname, 'src'),
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|ico|svg|jpg|jpeg|gif|pdf|mp4)$/,
                use: ['file-loader?name=[name].[ext]&outputPath=images/'],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            dev: true,
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['index'],
            hash: true
        })
    ]
}


if (env.NODE_ENV === 'development') {
    module.exports = merge.smart(common, {
        output: {
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: path.join(__dirname, 'src'),
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                },
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: OUTPUT_DIR,
            hot: true,
            publicPath: '/'
        }
    })
} else {
    module.exports = merge.smart(common, {
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        performance: { hints: false },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: path.join(__dirname, 'src'),
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                },
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[hash]-global-styles.css',
                chunkFilename: '[id].[hash]-global-styles.css'
            })
        ]
    })
}

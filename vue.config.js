const resolves = dir => require('path').join(__dirname, dir);
// 使用交互式可缩放 teemap 可视化 webpack 输出文件的大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 打包 lodash工具库 (处理 lodash 打包体积问题 )
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// 压缩算法 ， 将前端打包号的资源文件进一步压缩 ， 生成指定的 、体积更小的压缩文件 ， 让浏览器能够更快的加载资源
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 拷贝文件放在打包后的资源输出目录
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const pluginList = [
    new LodashModuleReplacementPlugin(),
    new CompressionWebpackPlugin({
        filename: info => `${info.path}.gz${info.query}`,
        algorithm: 'gzip',
        threshold: 10240 * 10, // 只有大小大于该值的资源会被处理 10240
        test: new RegExp('\\.(' + ['js', 'css', 'json'].join('|') + ')$'),
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false // 删除原文件
    }),
    // new CopyWebpackPlugin([
    // 此依赖是一个播放器的包
    //     { from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml' },
    //     { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf' },
    //     { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js', to: 'js/' }
    // ]),
];

const OPTIONS = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    css: {
        // 查看CSS属于哪个css文件
        sourceMap: process.env.NODE_ENV === 'development',
        extract: process.env.NODE_ENV === 'production'
    },
    devServer: {
        // host: '192.1.1.58',
        // port: "8057",
        https: false,
        open: false,
        // proxy: {
        // '/NDAPI': {
        //     target: process.env.VUE_APP_BASE_URL,
        //     ws: true,
        //     secure: false,
        //     changeOrigin: true,
        //     pathReWrite: { '^/NDAPI': '' }
        // },
        // '/NingDeSW': {
        //     target: process.env.VUE_APP_BASE_URL,
        //     ws: true,
        //     secure: false,
        //     changeOrigin: true,
        //     pathReWrite: { '^/NingDeSW': '' }
        // },
        // '/assets': {
        //     target: process.env.VUE_APP_MOCK_URL,
        //     ws: true,
        //     secure: false,
        //     changeOrigin: true,
        //     pathReWrite: { '^/assets': '' }
        // },
        // '/arcgis': {
        //     target: process.env.VUE_APP_Arcgis_URL,
        //     ws: true,
        //     secure: false,
        //     changeOrigin: true,
        //     pathReWrite: { '^/arcgis': '' }
        // }
        // }
    },
    chainWebpack: config => {
        config.resolve.alias.set('@', resolves('src'));
        // 移除prefetch插件，避免加载多余的资源
        config.plugins.delete('prefetch');
        // 移除 preload 插件，避免加载多余的资源
        config.plugins.delete('preload');
        config.plugin('html').tap(args => {
            args[0].title = '后台管理系统';
            return args;
        })
    },
    configureWebpack: config => {
        // 调试JS
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map';
        } else {
            pluginList.push(new BundleAnalyzerPlugin());
        }
        //打包文件大小配置
        config.performance = {
            "maxEntrypointSize": 10240 * 100,
            "maxAssetSize": 10240 * 100
        }
        // 公共代码抽离
        config.optimization = {
            // 分割代码块
            splitChunks: {
                cacheGroups: {
                    //公用模块抽离
                    common: {
                        chunks: 'initial',
                        minSize: 10240 * 10, //大于0个字节
                        minChunks: 2, //抽离公共代码时，这个代码块最小被引用的次数
                    },
                    vendor: {
                        priority: 1, //权重
                        test: /node_modules/,
                        chunks: 'initial',
                        minSize: 10240 * 10, //大于0个字节
                        minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
                    }
                },
            }
        };
        config.plugins.push(...pluginList);
        config.mode = process.env.NODE_ENV;
    }
};

module.exports = OPTIONS;
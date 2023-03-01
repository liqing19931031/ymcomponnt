const path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: "main.js",
        libraryTarget: "umd",
        library: 'ym-comonent',
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'antd': 'antd'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node-modules/'
            }
        ]
    },
}
const path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        library: {
          name: "YmCop",
          type: "umd"
        },
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
module.exports = {
    entry: {
        demo: './src/demo.js',
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/out',
        filename: '[name].bundle.js',
        publicPath: '/out'
    },
    module: {
        rules: [
            {test: /.jpg|.png$/, use: ['url-loader']},
            {test: /.css$/, use: ['style-loader', 'css-loader']},
            {test: /.js$/, use: ['bable-loader']}
        ]
    },
    mode: 'development'
}
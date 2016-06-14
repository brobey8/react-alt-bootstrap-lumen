var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/js/index'
    ],
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.json']
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/ ,      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015','stage-2']
      }
},
            {include: /\.json$/, loaders: ["json-loader"]}
        ]
},  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
    
};

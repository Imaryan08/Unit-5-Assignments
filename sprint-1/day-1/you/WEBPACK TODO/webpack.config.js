const path=require("path");

module.exports={
    entry:"/src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"builder.js",
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/i,
            use: ['html-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
}
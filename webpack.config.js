var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={

  entry:{
    main:'./src/script/main.js',
    a:'./src/script/a.js',
    b:'./src/script/b.js',
    c:'./src/script/c.js'
  },
//打包的入口文件
  output:{
    path:'./dist', //打包完放在哪里
    filename:'js/[name].js',
  },

  plugins:[
    new htmlWebpackPlugin({
      template: 'index.html', //模板
      filename: 'a.html',
      inject: 'body',
      title:'This is html a',
      chunks:['a','main']
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'b.html',
      inject: 'body',
      title:'This is html b',
      chunks:['b']
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'c.html',
      inject: 'body',
      title:'This is html c',
      chunks:['c']
    })
  ]
}

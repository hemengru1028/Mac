// 后端入口文件

var app = require('../app')

var http = require('http')

var server = http.createServer(app)


// server.listen(4000)
server.listen(4000, () => {
    console.log('server is running at port 4000 success~~~');
})




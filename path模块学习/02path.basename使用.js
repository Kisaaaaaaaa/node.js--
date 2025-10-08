//通过path.basename()方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名
const path = require('path')

var pathName = '/a/b/c/index.html'
//ext是文件扩展名
//如果提供了ext参数，则返回的结果中不包含ext
var basename = path.basename(pathName,'.html')

console.log(basename)
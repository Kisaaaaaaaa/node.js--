const path=require('path')

const pathName='./a/b/c/index.html'


const extname=path.extname(pathName)
console.log(extname)

const basename=path.basename(pathName,extname)
console.log(basename)
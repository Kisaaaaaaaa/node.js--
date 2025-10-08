const fs=require('fs')
fs.readFile(__dirname+'/知识点.txt','utf-8',function(err,dataStr)
{
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为一个对象，dataStr的值为undefined
   if(err)
   {
    console.log(__dirname)
    return console.log('读取文件失败'+err.message)
   }
    console.log('读取文件成功'+dataStr)
    
})



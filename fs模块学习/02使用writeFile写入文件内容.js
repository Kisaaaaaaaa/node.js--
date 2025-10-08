const fs=require('fs')
fs.writeFile("./demo.txt",'hello world',function(err)
{
    //如果写入成功，则error的值为null
    //如果写入失败，则error的值为一个对象
    if(err)
    {
        return console.log('写入失败'+err.message)
    }
    console.log('写入成功')
})
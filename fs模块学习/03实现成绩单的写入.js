const fs = require('fs')
fs.readFile('./成绩单.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message)
    }
    let oldarr = dataStr.split(' ')
    const newarr = []
    oldarr.forEach(item => {
        newarr.push(item.replace('=', '：'))
    })
    const newstr = newarr.join('\n')
    fs.writeFile('./成绩单-OK.txt', newstr, function (err) {
        if (err) {
            return console.log('写入文件失败' + err.message)
        }
        console.log('写入文件成功')
    })

})

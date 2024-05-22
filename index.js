const fs = require('fs')
const http = require('http')
const url = require('url')
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');

// const textOut = `This is all about avacado:  ${textIn} \n Create on: ${Date.now()}`

// fs.writeFileSync('./starter/txt/output.txt', textOut)

// console.log('written')

// fs.readFile('./starter/txt/sta222rt.txt', 'utf-8', (err, data1) => {

//     if (err) return console.log('loi r ne')
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3)

//             fs.writeFile('./starter/txt/final2.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('done')
//             })
//         })
//     })
// })

// console.log('read')

const sever = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/' || pathName === '/overview') {
        res.end('This overview')
    }
    else if (pathName === '/product') {
        res.end('This product')
    }
    else if (pathName === '/api') {
        fs.readFile('./starter/dev-data/data.json', 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(data)
        })
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-heaeder': 'hello world'
        })
        res.end('<h1>Page not found </h1>')
    }
})

sever.listen(8000, '127.0.0.1', () => {
    console.log('Listening to resuyes 8000')
})
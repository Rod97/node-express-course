const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page homie')
    }
    else if(req.url === '/about'){
        res.end(`<h1>ABOUT THE CLOUT</h1>`)
    }

    else{res.end(`
    <h1>oopsie poopsie!</h1>
    <p>wooks wike dat page is not found</p>
    <p>pwease don't twie again</p>
    <a href="/">wetuwn to home pwease</a>
    `)}
})

server.listen(5050)
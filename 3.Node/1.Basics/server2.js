import http from 'node:http'

// PORT=3001 node server.js
// const { PORT = 0} = proccess.env

const server = http.CreateServer((req, res) => {
    res.WriteHead(200, { 'Content-type': 'text/html' })
    res.write('<h1>Hello Server</h1>')
    res.end()
})

// it look for a free PORT, use it in local.
server.listen(0, function () {
    console.log('Puerto Libre: http://localhost${this.address().port}')
}) 

// server.listen(process.env.PORT)
// server.listen(3000)

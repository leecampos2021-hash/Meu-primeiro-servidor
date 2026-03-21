const http = require('http');
const PORT = 3000;
const server = http.createServer ((req, res) => {

res.writeHead(200, {'Content-Type': 'text/html'})

res.end('<h1>Ola mundo Node.js!</h1>');
});

server.listen(PORT, ()=> {console.log('Servidor rodando no porta 3000')})

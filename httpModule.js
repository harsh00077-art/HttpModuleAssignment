const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'json' });
    fs.readFile('text.json','utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error : File Not Found');
        } else {
            let dataObject = data;
            res.write(dataObject);
            console.log('data is',dataObject)
            fs.writeFile('data.txt',dataObject);
        }
        res.end();
    })
})

server.listen(port, (err) => {
    if (err) {
        console.log('Something went wrong', err);
    }
    else {
        console.log(`server is listening on ${port}`);
    }
})

import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer( (req:IncomingMessage, res:ServerResponse) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    //fs module
    fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8', (error, result) => {
        if(error){
            console.log(error)
        }
        fs.writeFile(path.join(__dirname, 'data', 'data.txt'), result, 'utf-8', () => {
            if(error){
                console.log(error);
            }
        })
        res.end(`<pre>Data is written to a file ...</pre>`)
    })

});

server.listen(port, hostName, () => {
    console.log(`Nodejs server is started at http://${hostName}:${port}`)
})
import http, { IncomingMessage, Server, ServerResponse } from "http";
import os from "os";

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer( (req:IncomingMessage, res:ServerResponse) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    //OS module
    let osData = {
        totalMemory: os.totalmem(),
        freeMem: os.freemem(),
        homedir: os.homedir(),
        computerName: os.hostname(),
        platform: os.platform()
    }

    res.end(`<code style="color: green">${JSON.stringify(osData)}</code>`)
});

server.listen(port, hostName, () => {
    console.log(`Nodejs server is started at http://${hostName}:${port}`)
})
import http, { IncomingMessage, Server, ServerResponse } from "http";
import { StringUtil } from "./util/StringUtil";

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer( (req:IncomingMessage, res:ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //string util
    let customerName:string = 'Jahongir';
    let length:number = StringUtil.printLength(customerName);

    let channelName:string = 'Xo\'jamuratov Jahongir Matmurot o\'g\'li';
    let result:string = StringUtil.printTriangle(channelName);
    
    res.end(`<pre style="color: green">${result}</pre>`)
});

server.listen(port, hostName, () => {
    console.log(`Nodejs server is started at http://${hostName}:${port}`)
})
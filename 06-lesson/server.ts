import http, { IncomingMessage, Server, ServerResponse } from "http";
import { ApiRouter } from "./routing/apiRouter";

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer( (req:IncomingMessage, res:ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // node js routing
   ApiRouter.mapRoutes(req, res);
});

server.listen(port, hostName, () => {
    console.log(`Nodejs server is started at http://${hostName}:${port}`)
})
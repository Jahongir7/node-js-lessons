import http, { IncomingMessage, Server, ServerResponse } from "http";

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer( (req:IncomingMessage, res:ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // URL & POST 
    let url = req.url;
    let method = req.method;
    if(url === '/login' && method === 'POST') {
        try {
            let body:any = '';
            req.on('data', (chunk) => {
                body += chunk;
            }).on('end', () => {
                let formData = JSON.parse(body);
                if(formData.name === 'Jahongir' && formData.password === 'admin123'){
                    res.end(`<pre>Login is success</pre>`)
                }
                else{
                    res.end(`<pre>Failed to login</pre>`)
                }
            })
        } catch (error) {
            console.log(error)
        }
       
    }
  //  res.end(`<h3 style="color: green">Welcome to nodejs server</h3>`)
});

server.listen(port, hostName, () => {
    console.log(`Nodejs server is started at http://${hostName}:${port}`)
})
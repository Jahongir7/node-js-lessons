import https, { IncomingMessage, ServerResponse } from 'http'

export class ApiRouter {
    public static mapRoutes(request:IncomingMessage, response:ServerResponse){
        let url:string | undefined = request.url;
        let method:string | undefined = request.method;
        let result:string = '';
        if(url === '/' && method==='GET'){
            result = `<h3 style="color: green">Welcome to nodejs server</h3>`
        }
        else if(url === '/about' && method=== 'GET'){
            result = `<h3 style="color: green">About Page</h3>`
        }
        else if(url === '/contact' && method=== 'GET'){
            result = `<h3 style="color: green">Contact Page</h3>`
        }
        else{
            result = `<h3 style="color: green">Page Not Found</h3>`
        }
    
        response.end(`${result}`)
    }
}
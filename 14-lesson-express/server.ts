import express from 'express';
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';
const app:express.Application = express();

const hostname: string = '127.0.0.1';
const port:number = 5000;
//configure express recieve form data
app.use(express.json())
app.get('/', (request : express.Request, response:express.Response) => {
    response.status(200).send(`<h3  style="color: green">Welcome to express</h3>`)
});

//router configuration
app.use('/api',apiRouter);
app.use('/user',userRouter);

app.listen(port, hostname, () =>{
    console.log(`Server is started at http://${hostname}:${port}`)
})
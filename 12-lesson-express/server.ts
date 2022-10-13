import express from 'express';
import apiLogger from './middlewares/appLogger';
import apiRouter from './router/apirouter';
import userRouter from './router/userRouter';

const app:express.Application = express();

const hostname: string = '127.0.0.1';
const port:number = 5000;

//configure middleware
app.use(apiLogger)


//express js da form datani nastroyka qilish

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (request : express.Request, response:express.Response) => {
    response.status(200).send(`<h3  style="color: green">Welcome to express</h3>`)
});
// router configuration
app.use('/users', userRouter);
app.use('/api', apiRouter);
app.listen(port, hostname, () =>{
    console.log(`Server is started at http://${hostname}:${port}`)
})
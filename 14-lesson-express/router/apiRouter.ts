import express from "express";

const apiRouter:express.Router = express.Router();

//logic
apiRouter.get('/', (request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3  style="color: green">Welcome to api router</h3>`)
});
apiRouter.get('/test', (request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3  style="color: green">Welcome to test router</h3>`)
})


export default apiRouter
import express from "express";

const userRouter:express.Router = express.Router();

//logic
userRouter.get('/', (request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3  style="color: green">Welcome to userRouter</h3>`)
});
userRouter.get('/test', (request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3  style="color: green">Welcome to test userRouter</h3>`)
})


export default userRouter
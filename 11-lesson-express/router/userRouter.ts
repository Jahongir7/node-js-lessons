import express from "express";

const userRouter:express.Router = express.Router();
userRouter.get('/' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>Welcome to  user router</h1>`)
});

//form data
userRouter.post('/login', (req:express.Request, res:express.Response) => {
    let formData = req.body;
    res.status(200).json({
        msg: 'form data recievesd',
        formData
    })
})


export default userRouter;
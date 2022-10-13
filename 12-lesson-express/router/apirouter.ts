import express from "express";
import apiLogger from "../middlewares/appLogger";

const apiRouter:express.Router = express.Router();
apiRouter.get('/' ,apiLogger, (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>Welcome to  api router</h1>`)
});

//form data
apiRouter.post('/login', (req:express.Request, res:express.Response) => {
    let formData = req.body;
    res.status(200).json({
        msg: 'form data recievesd',
        formData
    })
})


export default apiRouter;
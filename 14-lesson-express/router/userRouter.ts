import express from "express";
import {body, validationResult} from 'express-validator'
const userRouter:express.Router = express.Router();

//logic
userRouter.get('/', (request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3  style="color: green">Welcome to userRouter</h3>`)
});
/*
    fields: name, email, password
*/

userRouter.post('/register',[
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('email is not valid'),
    body('password').isLength({min:5}).withMessage('Minimum 5 character required')
] ,async(request:express.Request, response:express.Response) =>{
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        response.status(400).json({errors:errors.array()})
    }
    let {name,email,password} = request.body;
    try {
        response.status(200).json({
            user:{name,email,password},
        })
    } catch (error) {
        console.log(error)
    }

   
})


export default userRouter
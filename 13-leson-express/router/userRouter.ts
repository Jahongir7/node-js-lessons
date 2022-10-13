import express from "express";
import bcrypt from "bcryptjs"

const userRouter:express.Router = express.Router();

//logic
userRouter.get('/', (request:express.Request, response:express.Response) =>{
    response.status(200).send(`<h3  style="color: green">Welcome to userRouter</h3>`)
});
userRouter.post('/register', async(request:express.Request, response:express.Response) =>{

    let {name,email,password} = request.body;
    try {
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        response.status(200).json({
            user:{name,email,password},
            hashedPassword,
        })
    } catch (error) {
        console.log(error)
    }

   
})


export default userRouter
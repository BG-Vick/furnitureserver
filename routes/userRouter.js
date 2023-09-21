import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


export const userRouter = new Router()

userRouter.post('/registrationUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', userController.registation)

userRouter.post('/login', userController.login)

userRouter.get('/auth', authMiddleware, userController.check)


//userRouter.delete('/auth/:id', userController.delete)


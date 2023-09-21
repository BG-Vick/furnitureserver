import { Router } from "express";
import { infoController } from "../controllers/InfoController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";


export const infoRouter = new Router()


infoRouter.post('/',checkRoleMiddleware('ADMIN'), infoController.create)
infoRouter.delete('/:id',checkRoleMiddleware('ADMIN'), infoController.delete)



import { Router } from "express";
import { infoController } from "../controllers/InfoController.js";


export const infoRouter = new Router()


infoRouter.post('/', infoController.create)
infoRouter.delete('/:id', infoController.delete)



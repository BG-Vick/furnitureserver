import { Router } from "express";
import { basketController } from "../controllers/basketController.js";



export const basketRouter = new Router()


basketRouter.get('/:id', basketController.getOne)       // workingg    http://localhost:7000/api/basket/2        get/: id
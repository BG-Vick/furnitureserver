import { Router } from "express";
import { brandController } from "../controllers/brandController.js";

export const brandRouter = new Router()



brandRouter.get('/', brandController.getAll)
brandRouter.post('/', brandController.create)
brandRouter.patch('/', brandController.update)
brandRouter.delete('/:id', brandController.delete)

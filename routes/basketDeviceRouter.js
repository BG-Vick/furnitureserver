import { Router } from "express";
import { basketDeviceController } from "../controllers/basketDeviceController.js";


export const basketDeviceRouter = new Router()


basketDeviceRouter.get('/:id', basketDeviceController.getOne)      // working    http://localhost:7000/api/basket/2       get/: id
basketDeviceRouter.post('/', basketDeviceController.create)       // working     http://localhost:7000/api/basket         post  { body: row: basketId, devicedId }
import { Router } from "express";
import { deviceController } from "../controllers/deviceController.js";

export const deviceRouter = new Router()

deviceRouter.get('/', deviceController.getAll)          //           http://localhost:7000/api/device           get
deviceRouter.get('/:id', deviceController.getOne)       //           http://localhost:7000/api/device/32        get/: id
deviceRouter.post('/', deviceController.create)         //           http://localhost:7000/api/device           post  { body: form-data: name, price, rating, img, brandId, typeId} info
deviceRouter.patch('/', deviceController.update)
deviceRouter.delete('/:id', deviceController.delete)


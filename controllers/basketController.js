import { Basket } from "../models/models.js"
import { v4 as uuidv4 } from 'uuid';
import { ApiError }  from "../error/ApiError.js"
import path from "path";
const __dirname = path.resolve();



class BasketController{

    async getOne(req, res,next){
        const {id} = req.params
        try {
        const basket = await Basket.findOne({
            where:{id},
        })
        return res.json(basket)
    } catch (e) {
        next(ApiError.badRequest(e.message));
      }
    }
}

export const basketController = new BasketController() 

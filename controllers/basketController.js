import { Basket } from "../models/models.js"
import { v4 as uuidv4 } from 'uuid';
import { ApiError }  from "../error/ApiError.js"
import path from "path";
const __dirname = path.resolve();
import { Device, DeviceInfo } from "../models/models.js"
import { sequelize } from "../db.js";



class BasketController{
    
     async getOne(req, res,next){

        
        //const {id} = req.params





        try {

            await sequelize.drop()
console.log('Все таблицы были удалены.')




        //const basket = await Basket.findOne({
        //    where:{id},
        //})
        //return res.json(basket)
    } catch (e) {
        next(ApiError.badRequest(e.message));
      }
    } 
}

export const basketController = new BasketController() 

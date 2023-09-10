import { Device, DeviceInfo } from "../models/models.js"
import { v4 as uuidv4 } from 'uuid';
import { ApiError }  from "../error/ApiError.js"
import path from "path";
const __dirname = path.resolve();



class DeviceController{

    async getAll(req, res, next){

        try{
            let {brandId, typeId, limit, page} = req.query
            page = page || 1    
            limit = limit || 9
            let offset = page*limit - limit    
            let devices
        if(!brandId && !typeId){
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(!brandId && typeId){
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})

        }
        if(brandId && !typeId){
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})

        }
        if(brandId && typeId){
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})

        }
        return res.json(devices)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next){
        try{
            const {id} = req.params
            const device = await Device.findOne({
                where:{id},
                include: [{model: DeviceInfo, as: 'info'}]
            })
            return res.json(device)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

     async create(req, res, next){
        try{
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            console.log(img)
            let fileName = uuidv4() + ".jpg"
            img.mv(path.resolve(__dirname, "static", fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            if(info){
                info = JSON.parse(info)
                info.forEach(i => 
                        DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                );
            }
            return res.json(device) 
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next){
        try{
            let {name, price, brandId, typeId, info, id } = req.body
            //Работа с добавлением изображения
            //const {img} = req.files
            //let fileName = uuidv4() + ".jpg"
            //img.mv(path.resolve(__dirname, "static", fileName))
            //img: fileName
            const device = await Device.update({name, price, brandId, typeId }, {where:{ id } })
            if(info){
                info = JSON.parse(info)
                console.log(info)
                info.forEach(i => 
                        DeviceInfo.update({
                        title: i.title,
                        description: i.description,
                    },
                    {
                        where:{id: i.id},
                    }
                    )
                );
            }
            return res.json(device) 
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    
    async delete(req, res, next){
        try{
            const {id} = req.params
            await Device.destroy({
                where:{id}
            })
            return res.json("Продукт успешно удален")
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

/* 
async createInfo(req, res, next){
    const { id } = req.params
    console.log(id)
    let { info } = req.body
    try{
        const deviceInfo = await DeviceInfo.create({
                title: info.title,
                description: info.description,
                deviceId: id
            })
        return res.json(deviceInfo)
    } catch(e){
        next(ApiError.badRequest(e.message))
    }
} */

/* async deleteInfo(req, res, next){
    const { id } = req.params
    console.log(id)
    let { info } = req.body
    try{
        const deviceInfo = await DeviceInfo.create({
                title: info.title,
                description: info.description,
                deviceId: id
            })
        return res.json(deviceInfo)
    } catch(e){
        next(ApiError.badRequest(e.message))
    }
} */



}

export const deviceController = new DeviceController() 

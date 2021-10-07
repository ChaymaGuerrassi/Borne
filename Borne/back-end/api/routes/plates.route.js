import express from 'express'
import Plate from '../models/plate.js'

const router = express.Router()

router.get('/', async (req,res) => {
    try{
        const datas = await Plate.find()
        res.json(datas)

    }catch(err){
        res.json({message:err})
    }
})

router.post('/', async (req,res) => {
    console.log(req.body)

    const data = new Plate({
        name: req.body.name,
        price: req.body.price,
        urlImg: req.body.urlImg,
        catId: req.body.catId,
        description: req.body.description,
        quantite: req.body.quantite
    })
    try{
        //post.save() : fonction asynchrone
        const savedData = await data.save()
        res.json(savedData)
        
    }catch(err){
        res.json({message:err})
    }

})

export default router
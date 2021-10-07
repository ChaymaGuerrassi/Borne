import express from 'express'
import Category from '../models/category.js'

const router = express.Router()

router.get('/', async (req,res) => {
    try{
        const datas = await Category.find()
        res.json(datas)

    }catch(err){
        res.json({message:err})
    }
})

router.post('/', async (req,res) => {
    console.log(req.body)

    const data = new Category({
        name : req.body.name,
        urlImg : req.body.urlImg,
        position : req.body.position
    })
    try{
        //post.save() : fonction asynchrone
        const savedData = await data.save()
        res.json(savedData)
        
    }catch(err){
        res.json({message:err})
    }

})

router.get('/:dataId', async (req,res) => {
    try{
        const datas = await Category.findById(req.params.dataId)
        res.json(datas)

    }catch(err){
        res.json({message:err})
    }
})

export default router
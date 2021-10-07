import mongoose from'mongoose'

const DishSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    urlImg: {
        type : String,
        required : true
    },
    catId: {
        type : String,
        required : true
    },
    description: {
        type : String,
        
    },
    ingredients: {
        type : String,
        
    },
    quantite: {
        type : Number,  
    }
})

export default mongoose.model('Plats', DishSchema)
import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    urlImg: {
        type : String,
    },
    position: Number
})


export default mongoose.model('Categories', CategorySchema)
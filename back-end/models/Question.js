
import mongoose from "mongoose"


const Schema = mongoose.Schema
const questionSchema= new Schema({

    titre: {type:String},
    contenu:{type:String},
    categorie:{type:String},

}, {timestamps:true})

const Question = mongoose.model('question', questionSchema)

export default Question
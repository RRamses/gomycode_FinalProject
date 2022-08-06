//C  c
//Categorie  categorie





import mongoose from "mongoose"


const Schema = mongoose.Schema
const categorieSchema= new Schema({
    
    name:{type:String},

}, {timestamps:true})

const Categorie = mongoose.model('categorie', categorieSchema)

export default  Categorie;
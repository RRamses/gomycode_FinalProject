

import mongoose from "mongoose"


const Schema = mongoose.Schema
const answerSchema= new Schema({
    
    QId:{type:String},
    reponse:{type:String},
    

}, {timestamps:true})

const Answer = mongoose.model('answer', answerSchema)

export default Answer
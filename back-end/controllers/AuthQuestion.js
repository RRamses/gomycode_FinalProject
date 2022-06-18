

import Question from '../models/Question.js';


export const Questions = (req,res,next) =>{

Question.find()
    .then((question)=>{ 
        
        res.json({
            question
        })
    
    }) 

    .catch(error=>{
        res.status(405).json({
        message:error
        })
})

}



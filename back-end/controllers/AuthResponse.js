
import Answer from '../models/Answer.js';
import Question from '../models/Question.js';


export const Reponses = (req,res,next) =>{

Question.findById().then((answer)=>{

    res.status(200).json({
        message:"Reponses getted successfully" ,
    })
    
}) .catch(error=>{
    res.status(405).json({
    message:error
    })
})
}






/* day braeck , bienvenue chez mamillia , insecure */

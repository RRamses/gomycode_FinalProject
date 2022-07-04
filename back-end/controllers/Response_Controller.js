
import Answer from '../models/Answer.js';
import Question from '../models/Question.js';




export async function Reponses (req ,res,next ) {
    try {
        let questionId= req.params.questionid;
        let id= await Question.findById( questionId)
        let reponse=id.reponses

        res.json({success : true, reponse : reponse});

    }catch(err) {
        console.log('err', err)
        res.json({success : false, error : "erreur"});
    }
}











/*
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
}*/









/* day braeck , bienvenue chez mamillia , insecure */

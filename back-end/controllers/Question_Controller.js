

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

export async function findQuestionById (req ,res,next ) {
    try {
        let questionId= req.params.questionid;
        let id= await Question.findById(questionId)
        let ask=id

        res.json({success : true, ask : ask});

    }catch(err) {
        console.log('err', err)
        res.json({success : false, error : "erreur"});
    }
}



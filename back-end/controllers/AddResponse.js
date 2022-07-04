
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';





export async function AddReponse (req ,res,next ) {
    try {
        let questionId= req.params.questionid
        let answer = new Answer();
        answer.response = req.body.response
        answer.QId = questionId
        await answer.save();

        let question = await Question.findById(questionId);
        //console.log(question);
        question.reponses.push(answer);
        await question.save();
        res.json({success : true, question : question});

    }catch(err) {
        console.log('err', err)
        res.json({success : false, error : "erreur lors de l'ajout de la reponse"});
    }
}







/*  tout ce qui suit est en commentaire*/
/*
export const AddReponse = (req,res,next)=>{

    let response= new Answer({
        response:req.body.reponse
        })

    let questionId = req.params.id
        

    response.save()
    .then(reponse =>{ Question.findById(questionId).then(()=>{

        Question.reponses.push(reponse),
        Answer.Qid=questionId 

    }) .catch(error=>{
            res.status(407).json({
                message:" la reponse n'a pas ete ajoutée a la question"
            })
        })



    Question.save()
            .then(ask =>{
                    res.status(204).json({
                    message:"Reponse ajouté a la question avec succes" 
            })
        })
        .catch(error=>{
            res.status(408).json({
            message:" question non sauvegardée, question non ajoutée"
            })
        })
    

        
    }) .catch(error=>{
        res.status(406).json({
            message:" la question n'a pas été trouvée" 
        })
    })
    
} */
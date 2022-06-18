
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';





export async function AddReponse () {
    try {
        const result = await findQuestion ()
        
        console.log('c est zooo',result)

    }catch(err) {
        console.log('err', err)

    }
}

const  findQuestion = (req ,res,next ) => {

    let response = new Answer({
        response : req.body.reponse
    }); /* l erreur est ici on me dit que body est indefinit (moi je comprend qu il dise que c est vide) */

    let questionId=req.params.id

    return new Promise ((resolve , reject) =>{

        let find= Question.findById(questionId)

        if(questionId == find){

            find.reponses.push(response);
            Answer.Qid= questionId ;
            Answer.reponse= response ;
            resolve('reponse ajouté a la question ')
            res.json({
                Answer,
                message : resolve})

        }else{
            reject('Aucune question ne correspond a cet id ')
            res.json({
                message: reject
            })
        }


    })

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


import Question from '../models/Question.js';

export const AddQuestion =(req,res,next)=>{

    let question= new Question({

        titre:req.body.titre,
        contenu:req.body.contenu,
        categorie:req.body.categorie,
        })
        

    question.save()
    .then(u =>{
    res.status(200).json({
    message:"Question added successfully" ,
    
    })
        })

        .catch(error=>{
            res.status(405).json({
            message:error
            })
        })
}
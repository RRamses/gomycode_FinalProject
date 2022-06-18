
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';





export async function AddReponse (req ,res,next ) {
    try {
        let answer = new Answer();
        answer.response = req.body.response
        await answer.save();
        let question = Question.findById(questionId);
        question.reponses.push(answer);
        await question.save();
        res.json({success : true, question : question});

    }catch(err) {
        console.log('err', err)
        res.json({success : false, error : "erreur lors de l'ajout de le reponse"});
    }
}


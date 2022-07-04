import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import axios from '../api/axios';
import { getQuestion } from '../redux/action';
import { Question } from './Questions';



const QuestionList =()=>{
    
    const questions = useSelector((state) => state.allQuestions.questions);
    const dispatch = useDispatch();
    

    const fetchQuestions = async () => {
        const response = await axios
            .get("http://localhost:3500/Questions")
            .catch((err) => {
            console.log("Err: ", err);
            });
        dispatch(getQuestion(response.data));
        
    };


    useEffect(() => {

        fetchQuestions();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    console.log("AllQuestions:", questions);



    
    const renderList=Object.keys(questions).map((question,index) => (<Question   question={question} key={index} />)  )

    return(
            <div className="Questionlist">
                {renderList} 
                
                 {/* Quand j execute rien ne s affiche
                 j ai ajouté des elements a mon etat dans redux pour tester mais je me rend compte qu'il ne map pas le contenu de mon etat 
                  pourtant j ai bel et bien recuperer le contenu de mon api et mon etat a ete mis a jour */}


            </div>
            
        )
}
export default QuestionList ;
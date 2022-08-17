import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import axios from '../api/axios';
import { getQuestion } from '../redux/action';
import { Question } from './Questions';



const QuestionList =(props)=>{
    

    const [loading, setLoading] = useState(true)

    /* recuparation des questions dans  ma base de donées  */
    const allquestions = useSelector((state) => state.allQuestions.questions);
    const data = allquestions.question  
    
    const dispatch = useDispatch();
    

    const fetchQuestions = async () => {
        const response = await axios
            .get("https://myforum-web.herokuapp.com/Questions")
            .catch((err) => {
            console.log("Err: ", err);
            });
            setLoading(false)
        dispatch(getQuestion(response.data));
        
    };


    useEffect(() => {

        fetchQuestions();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps


    

    

    return(
            <div className="Questionlist">

                {loading ? (
                    <h2>loading</h2>
                    ) :  
                        data
                    .filter((q) => q.titre.toLowerCase().includes(props.filter.toLowerCase()) )
                    .map((question , index) => { return (   <Question   question={question} key={index} />)  })                       
                }

            </div>
            
        )
}
export default QuestionList ;
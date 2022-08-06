import { createRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { findQuestionById, removeSelectedQuestion, selectedQuestion } from "../redux/action";
import { Comment } from "./comment";



const Answer =()=> {
    
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)

    







    /*  recuperer l' ID dans l url  */

    const questionId = useParams().questionId;

    /* recuperer les reponses correpondante a la question   */

    const fetchQuestionDetail = async (id) => {
        const response = await axios
        .get(`http://localhost:3500/Reponses/${id}`)
            .catch((err) => {
            console.log("Err: ", err);
        })
        setLoading(false)
        dispatch(selectedQuestion(response.data));
        console.log(response.data)
        
    };

  /*  reuperer la question  pour afficher son titre et son contenu  */

    const fetchfindQuestionById = async (id) => {
        const response = await axios
            .get(`http://localhost:3500/findQuestionById/${id}`)
            .catch((err) => {
            console.log("Err: ", err);
            });
            setLoad(false)
        dispatch(findQuestionById(response.data));
        console.log(response.data)
        
    };

    /*   je verifie si il y bien un id dans url puis j recupere la question et la reponse */
    useEffect(() => {
        if (questionId && questionId !== "") fetchQuestionDetail(questionId)
        fetchfindQuestionById(questionId);
        return () => {
        dispatch(removeSelectedQuestion());
        };
        
    }, [questionId])// eslint-disable-line react-hooks/exhaustive-deps
    
    /*  afficher et utilisé les reponses  */

    const answer = useSelector((state) => state.question.reponse);



    /* afficher la question */

    const data = useSelector((state) => state.findQuestionById.ask)


      /* code pour permettre la saisit de nouvelles reponses */

    const [reponse, setreponse]= useState('')
    const reponseRef = createRef();
    const errRef = useRef();

    const [succes , setsucces] = useState(false);
    const [errMsg , seterrMsg] = useState('');

    useEffect(()=>{
        if (reponseRef && reponseRef.current) {
            reponseRef.current.focus(); 
        }
    })

    useEffect(()=>{
        seterrMsg('');
    },[reponse , questionId])

    const ADDREPONSE_URL=`http://localhost:3500/addreponse/${questionId}`

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post(ADDREPONSE_URL,
                JSON.stringify({ QId: questionId , response : reponse}),
                {
                    headers : {'Content-Type':'application/json'},
                    withCredentials : true
                }
                );
                console.log(JSON.stringify(response.data))
                setsucces(true)

        }catch(err){
            if(err.response.status === 403){
                seterrMsg('no server responses')
            }else if(err.response.status=== 405) {
                seterrMsg('add reponses Falled')
            }
                errRef.current.focus();
    }
    }

      /*   */


    return(

<>  
  
{loading? (  "loading..." 
        ) :(
    <div className="answer">
        <div  className="cardd">
            <div className="card1">
                <h1>{data.titre}</h1>
                <p>{data.contenu}</p>
                <hr/>
                <p>{answer.length} reponses</p>

                <div>
                {  answer.map((reponse , index)=>  { return (<Comment  comment={reponse.response} key={index}     /> )} )}

                </div>
                <form onSubmit={handleSubmit} >
                <p ref={errRef} id="err" className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>

                <input className='reponse'
                type="text" 
                id="reponse"
                ref={reponseRef}
                placeholder="ajouter votre reponse" 
                onChange={(e) =>setreponse(e.target.value)}
                required
                
                />

                <button type="submit" className="btnanswer" >commenter</button>
                </form>
            </div>
            <div className="card2">
                <Link  to={`/home`}  >
                    <p> RETOUR</p>
                </Link>
            </div>

        </div>

    </div>)

       }

</>) 
}


export default Answer ;



/*        https://www.youtube.com/watch?v=T2nGvxrSjqs&list=PLttXt81M2FST3F053pJzBrpvvTO7pt5wS    

https://www.youtube.com/watch?v=T2nGvxrSjqs&list=PLttXt81M2FSRxbOJa6oZPYIjCKRLO_mFB

https://www.youtube.com/watch?v=ZDEAUI58iA8&list=PLttXt81M2FSTQ8mH-FFOyklbwgrK_gXu_

https://www.youtube.com/c/LInvestisseurAfricain/playlists
*/


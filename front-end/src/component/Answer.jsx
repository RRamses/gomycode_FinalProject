import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";



const Answer =(props)=> {
    

    return(

<>
    <div className="answer">
        <div  className="cardd">
            <div className="card1">
                <h1>{props.title}</h1>
                <p>{props.contenu}</p>
                <hr/>
                <p> reponses</p>

                <div>
                {/*props.answers.map((answer)=><Comment  commentaire={answer.reponse} key={Date.now()}     />) */}

                    </div>

                <textarea className='reponse'
                type="text" 
                id="contenu"
                placeholder="ajouter votre commentaire" 
                //onChange={(e) =>setreponse(e.target.value)}
                required/>
                
                
                <button type="submit" className="btnanswer" >commenter</button>
                

            </div>
            <div className="card2">
                <Link  to={`/home`}  >
                    <p> RETOUR</p>
                </Link>
            </div>

        </div>

    </div>
</>  )  
}


export default Answer ;
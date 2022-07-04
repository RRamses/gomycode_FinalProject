
import { Link } from "react-router-dom"



export const Question =(props)=>{
    

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
return(

<div className="askip" >
        <Link  to={`/Reponses/${props.question.id}`}  ><h3>{props.question.titre}</h3></Link>
            <p>{date}, {time}</p>
            <p>{props.question.contenu}</p>
            <div id="ask_cat"> 
                <p> { props.question.lenght} reponses </p>
                <p>{props.question.categorie} </p>
                ibuyjbjhb
            </div>
    </div>

)
}




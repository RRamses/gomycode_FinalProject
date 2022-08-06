

import { Link, } from "react-router-dom"



export const Question =(props)=>{
    
    
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
return(

<div className="askip" >
        <Link to={`/Reponses/${props.question._id}`}   ><h3>{props.question.titre}</h3></Link>
            <p>{date}, {time}</p>
            <p>{props.question.contenu}</p>
            <div id="ask_cat"> 
                <p> { props.question.reponses.length} reponses </p> 
                <p>{props.question.categorie.map((categori)=>  <p className="categories" key={categori._id}> {categori.name} </p> )} </p>
                
                
            </div>
    </div>

)
}




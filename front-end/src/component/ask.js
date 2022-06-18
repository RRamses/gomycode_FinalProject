import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



export const Ask =(props)=>{

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

return(
<>
<div className="askip" >
        <Link  to={`/answer`}  ><h3>{props.title}</h3></Link>
            <p>{date}, {time}</p>
            <p>{props.contenu}</p>
            <div id="ask_cat"> 
                { /*<p>1 reponses</p>*/}
                <p>{props.categorie} </p>
            </div>
</div>

</>)
}




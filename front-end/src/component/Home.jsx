
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ask } from "./ask";



const Home = (props)=>{

    const [questions,setquestions]=useState([])


    useEffect(()=>{

        fetch('http://localhost:3500/Questions')
            .then(response=>{
                const data = response.data;
                setquestions([{data}]);
                console.log("les données ont bien été recu");
            })
            .catch(()=>{
                console.log("les données n'ont pas été recu")
            })
        },[])

        
            
            
            /* 
                autre chose chaque question doit avoir un id afin que les reponses soit specifique a chaque question , c'est dans l ordre des choses
                bon vas vivre ta vie de noctambule maintenant vas kiffer my G tu code depuis tot le matin deja , tu sais meme pas quel heure il est ....
                 aaah sinon que il fais nuit ooh est ce que ta manger meme??
                  ton riz contonais t attend depuis midi est ce que tu te rappele de sa... allez degage de vs code pour aujourd hui  */

    return(
        <>
        
        <div className="header">
            <nav className="nav">
                <div className="part1"> <h2>Baroland</h2> </div>
                <div className="part2">
                    <input className="mail" placeholder=" email de l utilisateur" value={props.user} />
                    <Link  to={`/login`}  ><button className="btnlogout">Logout</button> </Link>
                </div>
            </nav>
            <div className="description">
                <div className="info">
                    <h1>Question</h1>
                    <p>ce forum est ouvert a toutes les question liées a la programmation</p>
                    <p>(php, java script, c++, mongodb,ruby, html)</p>
                </div>
                <input className="search" placeholder="rechercher des questions"   /> 
            </div>
        </div> 
        <div  className="main"> 
                <div className="list"> 
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        Reat
                        <span  className="badge bg-primary rounded-pill">1</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        PHP
                        <span  className="badge bg-primary rounded-pill">2</span>
                        </li>
                        <li  className="list-group-item d-flex justify-content-between align-items-center">
                        MONGODB
                        <span  className="badge bg-primary rounded-pill">1</span>
                        </li>
                        <li  className="list-group-item d-flex justify-content-between align-items-center">
                        HTML
                        <span  className="badge bg-primary rounded-pill">1</span>
                        </li>
                    </ul>
                </div>

            <div className="question">
                <div className="box1">
                    <h5>  {props.count_ask} questions</h5>
                    <Link to={`/addask`} style={{color:'white'}}>
                    <button className="btnask" >
                        Posez une question
                    </button> </Link>
                </div>

                <div className="box2">
                
                {/*{questions.map((questions)=><Ask   titre={questions.titre} contenu={questions.contenu}  categorie={questions.categorie}    />)}*/}

                </div>
            </div>

        </div>
        </>
        
    )

    
}
export default Home;
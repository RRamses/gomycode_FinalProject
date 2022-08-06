


import { useState } from "react";

import { Link } from "react-router-dom";
import Categorie from "./Categorie";

import QuestionList from "./QuestionList";

const Home = (props)=>{

        const [search,setsearch]=useState("")
        
            /*  fonction qui fait fonctionner la barre de recherche  */
            const hanldeChangeFilter = (e) => {    
                e.preventDefault();
                setsearch(e.target.value) 
                }


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
                <input className="search" placeholder="rechercher des questions"  onChange={hanldeChangeFilter} /> 
            </div>
        </div> 
        <div  className="main"> 
        
             <Categorie />

            <div className="question" >
                <div className="box1">
                    <Link to={'/addquestion'} style={{color:'white'}}>
                    <button className="btnask" >
                        Posez une question
                    </button> </Link>
                </div>

                <div className="box2" >

                <QuestionList     filter={search}/> 
                </div>

            </div>

        </div>
        </>
        
    )

    
}

export default Home
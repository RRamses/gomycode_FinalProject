
import { Link } from "react-router-dom";
import QuestionList from "./QuestionList";

const Home = (props)=>{

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

            <div className="question" >
                <div className="box1">
                    <h5>  {props.count_ask} questions</h5>
                    <Link to={'/addquestion'} style={{color:'white'}}>
                    <button className="btnask" >
                        Posez une question
                    </button> </Link>
                </div>

                <div className="box2" >

                <QuestionList />
                </div>

            </div>

        </div>
        </>
        
    )

    
}

export default Home
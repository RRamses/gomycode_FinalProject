
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
        <>
        <div className="header">
            <nav className="nav">
                <div className="part1"> <h2>Baroland</h2> </div>
                <div className="part2">
                    <input className="mail" placeholder=" email de l utilisateur" />
                    <button className="btnlogout">Logout</button>
                </div>
            </nav>
            <div className="description">
                <div className="info">
                    <h1>Question</h1>
                    <p>ce forum est ouvert a toutes les question liées a la programation</p>
                    <p>(php, java script, c++, mongodb,ruby, html)</p>
                </div>
                <input className="search" placeholder="rechercher des questions"/>
            </div>
        </div> 
        <div  className="main"> 
                <div className="list"> 
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        Reat
                        <span  className="badge bg-primary rounded-pill">14</span>
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
                    <h5>  3 questions.</h5>
                    <Link to={`/addask`} style={{color:'white'}}>
                    <button className="btnask" >
                        Posez une question
                    </button> </Link>
             </div>
             <div className="box2">


             </div>
           </div>

        </div>
        </>
        
    )
}
export default Home;
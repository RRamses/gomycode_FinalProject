
import { Link } from 'react-router-dom';


export const Addask = ()=>{

    return(
        <>
        <div className="addask">
            <div className="bigbox">
                <div className="boxx">
                    <div className="boxx1">
                        <h2>Poser votre question</h2>
                        <p style={{color:'grey'}}>Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider!</p>
                    </div>

                    <div className="boxx2">
                        <Link  to={`/home`}  >
                        <p> RETOUR</p>
                        </Link>
                    </div>

                </div>
                <h5>Titre de la question</h5>
                <textarea className='title' placeholder='donnez un titre a votre question'/>
                <h5>Contenu de la question</h5>
                <textarea className='contenu'/>
                <h5>Technologies / Categories</h5>
                <select  className="categories">
                        <option selected>selectionner une categorie</option>
                        <option value="react">React</option>
                        <option value="php" >PHP</option>
                        <option value="java script">java script</option>
                        <option value="java ">java </option>
                        <option value="mongodb ">Mongodb </option>
                        <option value="SQL ">SQL </option>
                        <option value="mongoose">mongoose </option>
                        <option value="node js">Node js </option>
                        <option value="Api">API </option>
                </select>
                
                <button className='btnadd'>POSEZ MA QUESTION</button>



            </div>

        </div>
    </> )

} 



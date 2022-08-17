
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import Home from "./Home";


export const AddQuestion = ()=>{

    const titleRef = useRef();
    const errRef = useRef();

    const [title, settitle] =  useState('');
    const [contenue , setcontenue] = useState('');
    const [categori , setcategori] = useState('');

    const [succes , setsucces] = useState(false);
    const [errMsg , seterrMsg] = useState('');

    useEffect(()=>{
        titleRef.current.focus()
    },[])

    useEffect(()=>{
        seterrMsg('');
    },[title , contenue , categori ])


    const ADDQUESTION_URL='https://myforum-web.herokuapp.com/addquestion' 

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(ADDQUESTION_URL,
                JSON.stringify({titre : title , contenu: contenue , category: categori}),
                {
                    headers : {'Content-Type':'application/json'},
                    withCredentials : true
                }
                );
                console.log(JSON.stringify(response.data))
                //const accessToken = response.data.token;
                setsucces(true)

        }catch(err){
            if(err.response.status === 403){
                seterrMsg('no server responses')
            }else if(err.response.status=== 405) {
                seterrMsg('add question Falled')
            }
                errRef.current.focus()
    }
    }

    


    return(
        <>
        
        { succes ? (
        <section>
            <Home />

        </section>) :(

        <div className="addask"    >
            <form className="bigbox" onSubmit={handleSubmit} >

            <p ref={errRef} id="err" className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
           { /*<p ref={succesRef} id="succes" className={succes ? "succes" : "offscreen"} aria-live="assertive"> {succes}</p>*/}

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
                <input className='title'
                            placeholder="donnez un titre a votre question"
                            type="text" 
                            id="title" 
                            ref={titleRef}
                            onChange={(e)=> settitle(e.target.value)}
                            required/>

                <h5>Contenu de la question</h5>
                <textarea className='contenu'
                placeholder="ecrivez votre question"
                type="text" 
                id="contenu" 
                
                onChange={(e) => setcontenue(e.target.value)}
                required/>
                
                
                <h5>Technologies / Categories</h5>
                
                <input className="categories"  
                        placeholder="ecrivez la categorie de votre question"
                        onChange={(e) => setcategori(e.target.value)}
                        required/>
            
                <button type="submit" className='btnadd' >POSEZ MA QUESTION</button>



            </form>

        </div>)}


    </> 
    
    )

} 



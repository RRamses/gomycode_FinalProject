import { Link } from "react-router-dom";
import forum from "./../forum.jpg";
import {useRef , useState , useEffect} from "react";
import axios from "../api/axios";
import Home from "./Home";


const Register=()=>{


    const userRef = useRef();
    const errRef = useRef();

    const [user , setuser] =  useState('');
    const [pwd , setpwd] = useState('');

    const [errMsg , seterrMsg] = useState('');
    const [Success , setSuccess] = useState(false)

    useEffect(()=>{
        userRef.current.focus()
    },[])

    useEffect(()=>{
        seterrMsg('');
    },[user , pwd ])

    const REGISTER_URL='https://myforum-web.herokuapp.com/register' 

    const handleSubmit = async (e) =>{
        e.preventDefault( )
        try{
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({email:user,password:pwd}),
                {
                    headers : {
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': 'https://gomycode-final-projectforum.netlify.app/' 
                },
                    withCredentials : true
                }
                );
                console.log(JSON.stringify(response.data))
                //const accessToken = response.data.token;
                setSuccess(true)

        }catch(err){
            if(err.response.status === 403){
                
                seterrMsg('no server responses')
            }else if(err.response.status=== 405) {
                
                seterrMsg('registration Falled')
            }else if(err.response.status=== 404) {
                
                seterrMsg('il y a une erreur au niveau du cryptage')
            }
            errRef.current.focus()
    }
   }
    return(
        <>
        { Success ? (
        <section>
            <Home user={user} />

        </section>) :(
        
        
        <div className="connexion">

            


            <div className="iimg">
                <img className="img" src={forum} alt="zz"/>
            </div>

        <div className="login" onSubmit={handleSubmit}>
            <form className="px-4 py-3" >

            <p ref={errRef} id="err" className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
                
                <div className="form-group">
                    <label for="name">Nom d'utilisateur</label>
                    <input type="text" 
                        className="form-control"
                        id="name" placeholder="Votre nom d utilisateur" />
                </div> 

                <div className="form-group">
                    <label for="Email">Email </label>
                    <input type="email"
                        className="form-control"
                        id="Email"
                        placeholder="email@example.com"
                        ref={userRef}
                        autoComplete ="off"
                        onChange={(e) =>setuser(e.target.value)}
                        required 
                        />
                </div>
                <div className="form-group">
                    <label for="Password1">Mot de passe</label>
                    <input type="password" 
                            className="form-control"  
                            id="Password1" 
                            placeholder="Mot de passe"
                            onChange={(e) =>setpwd(e.target.value)}
                            required  
                            />
                </div>
                
                <br/>
                
                <button type="submit" className="btn btn-primary">Inscription</button>
            </form>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item" >Si vous avez déjà un compte, vous pouvez vous  <Link to={`/login`} > connecter</Link></p>

            </div>
        </div>
        
        
        
        )}
        
        
        
        
        
        
        
        </>)
}


export default Register ;
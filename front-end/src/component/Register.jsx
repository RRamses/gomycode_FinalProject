import { Link } from "react-router-dom"
import forum from "./../forum.jpg"
import  {FontAwesomeIcon} from  "@fortawesome/react-fontawesome"
import {useRef , useState , useEffect} from "react"
import {faCheck , faTimes , faInfoCircle} from "@fortawesome/free-solid-svg-icons";
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

    const REGISTER_URL='http://localhost:3500/register' 

    const handleSubmit = async (e) =>{
        e.preventDefault( )
        try{
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({email:user,password:pwd}),
                {
                    headers : {'Content-Type':'application/json'},
                    withCredentials : true
                }
                );
                console.log(JSON.stringify(response.data))
                //const accessToken = response.data.token;
                //const roles = response.data.roles;
                
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
            <Home/>

        </section>) :(
        
        
        <div className="connexion">

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive">{errMsg}</p>


            <div className="iimg">
                <img className="img" src={forum} alt="zz"/>
            </div>

        <div className="login" onSubmit={handleSubmit}>
            <form className="px-4 py-3" >
                
                <div className="form-group">
                    <label for="name">Nom</label>
                    <input type="text" 
                        className="form-control"
                        id="name" placeholder="Votre nom" />
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
                {/*<div className="form-group">
                    <label for="confirm_pwd">Mot de passe(confirmation)
                    
                    
                    </label>
                    <input type="password"
                        className="form-control" 
                        id="confirm_pwd" 
                        placeholder="Mot de passe"
                        required  
                        aria-invalid={validmatch ? "false": "true"}
                        aria-describedby ="confirmnote"
                        onFocus={()=> setuserFocus(true)}
                        onBlur={()=> setuserFocus(false)} />

                
                
        </div> */}
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
import { Link } from 'react-router-dom'
import forum2 from "./../forum 2.jpg"
import {useRef,useState,useEffect, } from 'react'
import Home from './Home';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';

const LOGIN_URL='http://localhost:3500/login'


export const Connexion =() => {

    const {setAuth} = useAuth();

    const userRef=useRef();
    const errRef = useRef();

    const [user,setuser]= useState('');
    const [pwd,setpwd] = useState('');
    const [errmsg,seterrmsg] = useState('');
    const [succes,setsucces] = useState(false);

    useEffect(()=>{
        userRef.current.focus()
    },[])

    useEffect(()=>{
        seterrmsg('');
    },[user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username:user,password:pwd}),
                {
                    headers : {'Content-Type':'application/json'},
                    withCredentials : true
                }
                );
                console.log(JSON.stringify(response.data))
                const accessToken = response.data.token;
                setAuth({user,pwd,accessToken});
                setuser('')
                setpwd('')
                setsucces(true)

        }catch(err){
            if(err.response.status === 403){
                seterrmsg('no server responses')
            }else if (err.response.status === 400){
                seterrmsg('missing email or password')
            }else if (err.response.status === 401){  
                 seterrmsg('unauthorized user no found ');
            }else if(err.response.status=== 402) {
                seterrmsg('Login Falled password does match')
            }
            errRef.current.focus();
        }

    }


    return(
        <>

        { succes ? (
        <section>
            <Home  user={user}/>

        </section>) :(

        <div className="connexion">

            <div className="iimg">
                <img className="img" src={forum2}  alt='zz'/>
            </div>

        <div className="login">
            <form className="px-4 py-3" onSubmit={handleSubmit}>

                <p ref={errRef} id="err" className={errmsg ? "errmsg" : "offscreen"}
                aria-live="assertive">{errmsg}</p>

                <div className="form-group">
                    <label for="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" className="form-control"
                        id="mail"
                        placeholder="email@example.com"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e)=>setuser(e.target.value)}
                        value={user}
                        required
                        
                    />
                </div>

                <div className="form-group">
                    <label for="exampleDropdownFormPassword1">Mot de passe</label>
                    <input type="password" className="form-control" 
                    id="password" 
                    placeholder="Mot de passe" 
                    onChange={(e)=>setpwd(e.target.value)}
                    value={pwd}
                    required
                    
                    />
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck" >
                            Remember me
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">connexion</button>
            </form>
                <div className="dropdown-divider"></div> 

                <p className="dropdown-item" >Si vous n'avez pas de compte, vous pouvez vous  <Link to={`/`} > inscrire</Link></p>
                <p className="dropdown-item" >Forgot password?</p>

            </div>
        </div>
        
        )}
        
        
        </>)
}
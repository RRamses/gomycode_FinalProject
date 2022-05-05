import { Link } from 'react-router-dom'


export const Connexion =() => {
    return(
        <>
        <div className="connexion">
            <div className="iimg">
                <img className="img" scr="../../public/forum.jpg" />
            </div>

        <div className="login">
            <form class="px-4 py-3">
                <div className="form-group">
                    <label for="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label for="exampleDropdownFormPassword1">Mot de passe</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Mot de passe" />
                </div>
                <div className="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                    <label class="form-check-label" for="dropdownCheck" >
                            Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">connexion</button>
            </form>
                <div className="dropdown-divider"></div> 
               
                <p className="dropdown-item" >Si vous n'avez pas de compte, vous pouvez vous  <Link to={`/register`} > inscrire</Link></p>
                <p className="dropdown-item" >Forgot password?</p>

            </div>
        </div>
        
    
        
        
        </>)
}
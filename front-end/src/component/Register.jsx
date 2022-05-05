import { Link } from "react-router-dom"



export const Register=()=>{
    return(
        <>
        <div className="connexion">
            <div className="iimg">
                <img className="img" scr="../../public/forum.jpg" />
            </div>

        <div className="login">
            <form class="px-4 py-3">
                <div className="form-group">
                    <label for="exampleDropdownFormEmail1">Nom</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Votre nom" />
                </div>
                <div className="form-group">
                    <label for="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label for="exampleDropdownFormPassword1">Mot de passe</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Mot de passe" />
                </div>
                <div className="form-group">
                    <label for="exampleDropdownFormEmail1">Mot de passe(confirmation)</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Mot de passe" />
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Inscription</button>
            </form>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item" >Si vous avez déjà un compte, vous pouvez vous  <Link to={`/connexion`} > connecter</Link></p>

            </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        </>)
}
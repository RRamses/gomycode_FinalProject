import { Authcontext } from "../context/AuthProvider";
import { useContext } from "react"

const useAuth = () =>{
    return useContext(Authcontext)
}

export default useAuth;
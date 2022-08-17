import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import axios from '../api/axios';
import { getCategorie } from '../redux/action';





export const Categorie=()=>{
    
   
    const [loading, setloading] =  useState(true);
    const type= useSelector((state) => state.findallcategorie.categorie);
   
        
    const dispatch = useDispatch();
    
    /*  recuperation des categories dans ma base de donées */

    const fetchCategorie = async () => {
        const response = await axios
            .get("https://myforum-web.herokuapp.com/findAllCategorie")
            .catch((err) => {
            console.log("Err: ", err);
            });
            setloading(false)
            dispatch(getCategorie(response.data));
        console.log(response.data)
        
    };


    useEffect(() => {

        fetchCategorie();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

return(
      
<div className="list"> 
<h3>Categories</h3>
                {loading? (<h2> loading</h2>):(
                    <ul className="list-group">
                        {type.categorie.map((categorie)=>{return (

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                    {categorie.name}
                          </li> 
                        )})
                        
                        }

                    </ul>
                )}
                </div>

)
}

export default Categorie;
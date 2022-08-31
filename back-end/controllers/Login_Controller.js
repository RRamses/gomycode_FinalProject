

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const login =(req,res,next)=>{
    var username = req.body.username
    var password = req.body.password

    User.findOne({email:username})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){

                if(err){
                    res.status(403).json({
                        error:err
                    })
                }

                if(result){
                    //const roles = object.values(founduser.roles).filter(Boolean)
                    let token= jwt.sign({name:user.email},'verySecretvalue',{expiresIn:"2h"})
                    res.json({
                        message: "Login successful!",
                        token 
                    })
                }
                else{
                   res.status(402).json({
                        message: "Password does not match"
                    })
                }
            })
        }else{
            res.status(401).json({
                
                message: "No user found!"
            })
        }
    })

}

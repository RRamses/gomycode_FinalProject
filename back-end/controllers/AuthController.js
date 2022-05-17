import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './../models/User.js';


const register = (req,res,next) =>{

    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            res.status(404).json({error:"il y a une erreur au niveau du cryptage "})
        
    }
        
            let user= new User({
                name:req.body.name,
                email:req.body.email,
                password:hashedPass,
                })
                
    
            user.save()
            .then(u =>{
            res.status(200).json({
            message:"User added successfully" ,
            
            })
                })

                .catch(error=>{
                    res.status(405).json({
                    message:error
                    })
                })
        })

}

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
                    let token= jwt.sign({name:user.name},'verySecretvalue',{expiresIn:"2h"})
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

export default register 
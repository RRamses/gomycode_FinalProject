import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';



export const register = (req,res,next) =>{
    res.set('Access-Control-Allow-Origin', 'https://gomycode-final-projectforum.netlify.app/');

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



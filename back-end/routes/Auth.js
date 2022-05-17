import express  from 'express';
import register, { login } from './../controllers/AuthController.js'

const routes  = express.Router()

const Authcontroller  = register
const Authcontroller2 = login


routes.post('/register',Authcontroller)
routes.post('/login',  Authcontroller2  )


/*fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))*/
/*
routes.get('/login',(req,res)=>{
    res.send('respond with a resource');
})
routes.get('/',(req,res)=>{ 
        res.send('respond with a resource')
    })

routes.get('/register',(req,res)=>{
    res.send('respond with a resource')
})  */  

export default routes ; 
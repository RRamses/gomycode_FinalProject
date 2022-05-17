

import Database from "./Database/Database.js";
import express  from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import routes  from "./routes/Auth.js";
import XMLHttpRequest from 'xhr2';
import cors from 'cors';

const app=express()
const PORT=3500

/* connexion a la base de donnee*/
new Database()

/* */   
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
    }))

const corsOption = {
        origin: 'http://localhost:3000',
        credentials : true,
        optionsSuccessStatus: 200 , // For legacy browser support
        methods: ['POST' , 'GET']
        
    }

app.use(cors(corsOption));
app.use(routes)





app.listen(PORT,(err)=>{console.log(`le server tourne sur http://127.0.0.1:${PORT}`)})



/*
User.create([
    {
        name:"harvey",
        email:"specter@yahoo.fr",
        password:"azert456"
    },

    {
        name:"dona",
        email:"qsde@yahoo.fr",
        password:"wsxd94"
    },

]) */ 
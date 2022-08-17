

import Database from "./Database/Database.js";
import express  from "express";
import bodyParser from 'body-parser';
import Authroutes  from "./routes/Auth.js";
import cors from 'cors';
import Getroutes from "./routes/Get.js";

const app=express()
const port=process.env.PORT || 3500

/* connexion a la base de donnee*/
new Database()

/* */   



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
    }))



    const corsOption = {
        origin: 'https://gomycode-final-projectforum.netlify.app',
        optionsSuccessStatus: 200 , // For legacy browser support
        methods: ['POST' , 'GET']
        
    }




app.use(cors(corsOption));

app.use(Authroutes)
app.use(Getroutes)





app.listen(port,(err)=>{console.log(`le server tourne sur http://127.0.0.1:${port}`)})




/*User.create([
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


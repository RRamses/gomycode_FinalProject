

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

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'https://gomycode-final-projectforum.netlify.app/');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });


    const corsOption = {
        origin: 'https://gomycode-final-projectforum.netlify.app/',
        optionsSuccessStatus: 200 , // For legacy browser support
        methods: ['POST' , 'GET'],
    }

    const corsOption2 = {
        origin: 'https://myforum-web.herokuapp.com/',
        optionsSuccessStatus: 200 , // For legacy browser support
        methods: ['POST' , 'GET']
        
    }



app.use(cors(corsOption , corsOption2 ));
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




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
        res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

 const allowList = ['https://gomycode-final-projectforum.netlify.app/']
    const corsOption = {
        
        origin: function (origin, callback) {
    // Log and check yourself if the origin actually matches what you've defined in the allowList array
    console.log(origin);

    if (allowList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
,
        optionsSuccessStatus: 200 , // For legacy browser support
        methods: ['POST' , 'GET'],
        credentials: true
    }


    



app.use(Authroutes)
app.use(Getroutes)
app.use(cors(corsOption))





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


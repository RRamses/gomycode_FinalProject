import mongoose from "mongoose";


const server="127.0.0.1:27017";
const database="mongodb+srv://RRamses:GN2JMkjUypN9pZKd@cluster0.cbww9gb.mongodb.net/?retryWrites=true&w=majority"

/* creation de la base de donnee*/
class Database{

    constructor(){
    this._connect();
}

   /*liaison de la base de donnee a mongodb */
_connect(){
        mongoose.connect(`${database}`)
        .then(()=>{
            console.log('connexion a la bd reussit')
        }
        )
        .catch(err=>console.log("la connexion a la bd a ehcoué "+err))
    }
}

export default  Database
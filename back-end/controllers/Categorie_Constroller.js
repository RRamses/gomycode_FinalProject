

import Categorie from '../models/Categorie.js';
import Question from '../models/Question.js';


//afficher toutes les categories

export async function FindAllCategorie (req,res,next){
    try {

        let type=await Categorie.find()
        res.json({success : true, categorie : type});

    }catch(err){
        console.log('err', err)
        res.json({success : false, error : "erreur"});
}
}



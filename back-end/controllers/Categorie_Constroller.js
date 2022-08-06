

// afficher toute les categorie
//afficher la categorie par rapport a la question mais pense que cest dans question controller faut faire ça
//ajouter la categorie ecrite lors da l ajout de la reponse la section categorie de la reponse  







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

//afficher les question par rapport au categorie


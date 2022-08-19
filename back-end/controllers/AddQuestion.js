

import Categorie from '../models/Categorie.js';
import Question from '../models/Question.js';

export async function AddQuestion (req,res,next){
    res.set('Access-Control-Allow-Origin', 'https://gomycode-final-projectforum.netlify.app/');
    
    try {
        
        //recuperation des donnée saisie par l tutilisateur
        let titre =  req.body.titre
        let contenu = req.body.contenu
        let category = req.body.category

        // recherche de la categori saisie par l utilisateur parmi toute les categorie
        let type =await Categorie.find({"name": category })


        if(type ==  ""){
            
            // si la categorie tapée est introuvable , une nouvelle est creé et puis la question est enregistré avec la categorie reference

            let newcat = await new Categorie({
                name:category,             
            });
            await newcat.save()
            

            let question = await new Question({
            titre : titre,
            contenu: contenu,
            categorie:newcat
            }); 
            await question.save()

        res.json({success : true, question : question});
        
        
        }else{


            // si la categorie tapée existe la nouvelle question est enregistréé avec la categorie reference

            let question = await new Question({
                titre : titre,
                contenu: contenu,
                categorie:type
            });
            await question.save();
            
            res.json({success : true, question : question});
        }

            

    }catch(err){
        if (res.status(401)){
            console.log('err', err)
            res.json({success : false, error : "erreur lors de l'ajout de la question, probleme au niveau de la categorie "});
            } 
            else if (res.satus(402)){
                console.log('err', err)
                res.json({success : false, error : "erreur lors de l'ajout de la question, probleme au niveau de la question"});
                }
}
}
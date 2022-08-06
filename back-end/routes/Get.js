import express  from 'express';
import { FindAllCategorie,} from '../controllers/Categorie_Constroller.js';
import { findQuestionById } from '../controllers/Question_Controller.js';
import {Questions } from '../controllers/Question_Controller.js';
import {Reponses} from '../controllers/Response_Controller.js'

const Getroutes   = express.Router()

Getroutes.get('/Questions', Questions) 
Getroutes.get('/Reponses/:questionid',  Reponses)
Getroutes.get('/findQuestionById/:questionid', findQuestionById) 
Getroutes.get('/findAllCategorie',  FindAllCategorie) 
export default Getroutes;
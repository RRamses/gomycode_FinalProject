import express  from 'express';
import {Questions} from '../controllers/Question_Controller.js';
import {Reponses} from '../controllers/Response_Controller.js'

const Getroutes   = express.Router()

Getroutes.get('/Questions', Questions) 
Getroutes.get('/Reponses/:questionid',  Reponses)

export default Getroutes;
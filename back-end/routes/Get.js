import express  from 'express';
import {Questions} from '../controllers/AuthQuestion.js';
import {Reponses} from '../controllers/AuthResponse.js'

const Getroutes   = express.Router()

Getroutes.get('/Questions', Questions)
Getroutes.get('/Reponses',  Reponses)

export default Getroutes;
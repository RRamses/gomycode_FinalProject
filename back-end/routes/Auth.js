import express    from 'express';
import {login}    from '../controllers/Login_Controller.js';
import {register} from '../controllers/Register_Controller.js';
import { AddQuestion } from '../controllers/AddQuestion.js';
import { AddReponse }   from '../controllers/AddResponse.js';

const Authroutes  = express.Router()

Authroutes.post('/register',register)
Authroutes.post('/login',  login)
Authroutes.post('/addquestion', AddQuestion)
Authroutes.post('/addreponse/:questionid', AddReponse)

export default Authroutes ; 
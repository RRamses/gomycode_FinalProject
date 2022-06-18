import express    from 'express';
import {login}    from '../controllers/AuthLogin.js';
import {register} from '../controllers/AuthRegister.js';
import { AddQuestion } from '../controllers/AuthAddQuestion.js';
import { AddReponse }   from '../controllers/AuthAddResponse.js';

const Authroutes  = express.Router()

Authroutes.post('/register',register)
Authroutes.post('/login',  login)
Authroutes.post('/addquestion', AddQuestion)
Authroutes.post('/addreponse:questionid', AddReponse)

export default Authroutes ; 
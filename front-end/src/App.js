import './App.css';
import Home from './component/Home';
import { Route , Routes } from 'react-router';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { AddQuestion  } from './component/AddQuestion ';
import { Connexion } from './component/Connexion';
import RequireAuth from './component/RequireAuth';
import Register from './component/Register';
import Answer from './component/Answer';


function App() {

    

  return (
    <div className="App">
      <Routes>
        {/*  we have securise these routes */}
        <Route element={<RequireAuth />} > 
          
        <Route path='/home'  element={<Home   />} />
        <Route path='/addquestion' element={<AddQuestion  />} /> 
        <Route path='/Reponses/:questionId' element={<Answer  />} />

   </Route> 

        {/*  public routes */} 
        <Route path='/login' element={<Connexion/>} />
        <Route path='/' element={<Register/>}  />
        <Route path='/register' element={<Register/>} />
        
      </Routes>
     
    </div>
  );
}

export default App;

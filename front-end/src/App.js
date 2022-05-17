import './App.css';
import Home from './component/Home';
import { Route , Routes } from 'react-router';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Addask } from './component/Addask';
import { Connexion } from './component/Connexion';

import { Response } from './component/Response';
import RequireAuth from './component/RequireAuth';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*  we have securise these routes */}
        <Route element={<RequireAuth />} > 
          
        <Route path='/home'  element={<Home/>} />
        <Route path='/addask' element={<Addask/>} />
        <Route path='/response' element={<Response/>} />

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

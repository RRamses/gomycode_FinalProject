import './App.css';
import Home from './component/Home';
import { Route , Routes } from 'react-router';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Addask } from './component/Addask';
import { Connexion } from './component/Connexion';
import { Register } from './component/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/addask' element={<Addask/>} />
        <Route path='/connexion' element={<Connexion/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
     
    </div>
  );
}

export default App;

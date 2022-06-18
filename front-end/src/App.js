import './App.css';
import Home from './component/Home';
import { Route , Routes } from 'react-router';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Addask } from './component/Addask';
import { Connexion } from './component/Connexion';
import RequireAuth from './component/RequireAuth';
import Register from './component/Register';
import Answer from './component/Answer';
import { useSelector } from 'react-redux';

function App() {

    let count_ask = useSelector(state =>state.count_ask)
    let asks = useSelector(state => state.ask)
    let answers = useSelector(state => state.answer)

  return (
    <div className="App">
      <Routes>
        {/*  we have securise these routes */}
       {/* <Route element={<RequireAuth />} > */ }
          
        <Route path='/home'  element={<Home  asks={asks}  count_ask={count_ask} answers={answers} />} />
        <Route path='/addquestion' element={<Addask />} /> 
        <Route path='/addreponse' element={<Answer   asks={asks}   answers={answers} />} />

       {/* </Route> */}

        {/*  public routes */} 
        <Route path='/login' element={<Connexion/>} />
        <Route path='/' element={<Register/>}  />
        <Route path='/register' element={<Register/>} />
        
      </Routes>
     
    </div>
  );
}

export default App;

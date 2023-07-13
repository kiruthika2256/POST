import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Component/Home.js'
import View from './Component/View.js'



const App = () => {

  return (
    <div className='ui container'>
      <Router>
        <Routes>
        <Route path='/view' Component={View} />
        <Route path='/' Component={()=> <Home  />} />
        </Routes>
        
      </Router>


    </div>
   
  );
};

export default App;


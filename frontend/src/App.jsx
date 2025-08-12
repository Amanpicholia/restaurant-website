import React from 'react'
import "./App.css";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Success from './Pages/Success';
import Menu from './components/Menu';


const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/success" element={<Success />}/>
      <Route path="*" element={<Notfound />}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/explore_menu' element={<Menu/>}/>
      </Routes>
      < Toaster />
    </Router>
  }

export default App
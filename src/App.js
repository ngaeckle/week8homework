import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import CarSingle from './views/CarSingle';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Inventory'>Inventory</Link></li>
          <li><Link to='/Profile'>Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Inventory' element={<Inventory />}/>
        <Route path='/Car/:id' element={<CarSingle />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// In App.js or index.js
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/job' element={<Login/>}/>
    </Routes>
  );
}

export default App;

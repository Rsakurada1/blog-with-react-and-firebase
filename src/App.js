import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';
import { useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return ( 
  <Router>
    <Navbar isAuth={isAuth}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/createPost' element={<CreatePost isAuth={isAuth}/>}></Route>
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}></Route>
      <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />}></Route>
    </Routes>
  </Router>
  );
}

export default App;

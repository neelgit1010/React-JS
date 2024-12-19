import "./App.css";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import Register from './components/Register'
import {Routes, Route } from "react-router-dom";
import Work from "./components/Work";

function App() {
  return (
   <Routes>
     <Route path='/' element={<Login/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/dashboard' element={<DashBoard/>} />
     <Route path="/work" element={<Work/>} />
   </Routes >
  );
}

export default App;

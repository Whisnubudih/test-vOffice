import './App.css'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectRoute';

import Login from './Views/Login.js'
import Register from './Views/Register';
import Home from './Views/Home'
import Room from './Views/Room'
import RoomUsage from './Views/RoomUsage';



function App (){
  return (
    <div className='App'>
    <Routes>
    <Route path="/client" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/room" element={
              <ProtectedRoute>
                <Room/>
              </ProtectedRoute>
            } />
    <Route path="/" element={
              <ProtectedRoute>
                <RoomUsage/>
              </ProtectedRoute>
            } />
    </Routes>
    </div>
  )
}

export default App;

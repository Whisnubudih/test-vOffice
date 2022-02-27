import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar () {
  const navigate = useNavigate()

  const logouthandler = () =>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="navbar">
    <img src="images/logo-voffice2-dark.png" className="img-navbar" alt="" />

    <button className="nav-button">
    <Link to="/register" className="table-button-text" >Sign Up</Link>
    </button>
  </div>
 
    )
   
}

  export default  Navbar; 
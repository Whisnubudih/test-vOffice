import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavbarHome () {
  const navigate = useNavigate()

  const logouthandler = () =>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="navbar">

    <div className='navbar-title-container'>
    <img src="images/logo-voffice2-dark.png" className="img-navbar" alt="" />
    <Link to="/client" className="navbar-text" >Clients</Link>
    <Link to="/room"className="navbar-text" >Rooms</Link>
    <Link to="/" className="navbar-text" >RoomUsage</Link>
    </div>
    <button onClick={() => {
                  logouthandler()
                  }} className="nav-button">
    <p className="table-button-text" >Log Out</p>
    </button>
  </div>
 
    )
   
}

  export default  NavbarHome; 
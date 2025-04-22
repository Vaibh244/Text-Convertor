import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Toggle from './Toggle.jsx'
import { useNavigate } from "react-router-dom";



export default function Navbar(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-500 cursor-pointer dark:bg-gray-900">
        <div className="myDiv flex justify-between items-center p-4 text-white">
          <div className="left">
             <img
            src={props.logoImage}
            alt="Logo"
            className="w-32 h-10 object-cover cursor-pointer scale-105 hover:scale-110 transition-transform duration-300 rounded-3xl" 
            onClick={() => navigate("/home")}

          />
          </div>
          <div className="middle">
            <ul className="flex gap-4 text-xl">
            <li className="hover:text-green-400 dark:hover:text-blue-600"><Link to="/home">Home </Link> </li>
               <li className="hover:text-green-400 dark:hover:text-blue-600"><Link to="/about">About Us </Link> </li>
               <li className="hover:text-green-400 dark:hover:text-blue-600"><Link to= "/contactUs">Contact</Link></li>
               <li className="hover:text-green-400 dark:hover:text-blue-600">{props.Gallary}</li>
               <li className="hover:text-green-400 dark:hover:text-blue-600">Vlogs</li>
            </ul>
          </div>
          <div className="right items-center flex gap-4 justify-center">
            <button className="btn bg-green-500 rounded-md font-md px-4 py-2 hover:bg-green-600  dark:bg-blue-500 dark:hover:bg-blue-600">
              Login Now
            </button>

            <Toggle showAlert={props.showAlert} />
            
          </div>
        </div>
      </div>
  )
}

Navbar.propTypes = {
  logoTitle: PropTypes.string.isRequired,
  Gallary: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  logoTitle: "My Logo",
  Gallary: "Gallary"
}
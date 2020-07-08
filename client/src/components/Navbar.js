import React from 'react';
import logo from '../assets/headphones.png'
import { Link } from 'react-router-dom';


export default () => {

  return (
    <nav className="d-flex justify-content-between ml-3 p-2">
        <div className="d-flex">
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <h1 className=" text-center text-light ml-3 marienda">Musix</h1>
        </div>
      <div className="mr-3 mt-2">
        <a type="button" className="btn btn-outline-dark text-light border border-light">ID</a>
      </div>
    </nav>
  )
}

import React from 'react';
import logo from '../assets/headphones.png'
import { Link } from 'react-router-dom';
import FormSearch from './FormSearch';

export default () => {

  return (
    <nav className="d-flex justify-content-between ml-3 pt-2">
      <div className="d-flex">
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <h1 className=" text-center text-light ml-3 marienda">Musix</h1>
      </div>
      <div className="w-25">
        <FormSearch />
      </div>
      <div className="mt-2 w-25 pl-5">
        <div className="d-flex align-items-center justify-content-around">
          <Link to="/" className="text-light border-bottom pb-1">Home</Link>
          <Link to="/my-favorite" className="text-light border-bottom pb-1">My Favorite</Link>
          <a type="button" className="btn btn-outline-dark text-light border border-light">ID</a>
        </div>
      </div>
    </nav>
  )
}

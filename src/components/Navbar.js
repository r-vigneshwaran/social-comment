import React from 'react';
import Profile from 'assets/images/profile.jpg';

const Navbar = ({ handleClickAdd }) => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-items">
          <div className="nav nav-icon">
            <i class="bx bxs-bell"></i>
          </div>
          <div className="nav nav-text">
            <p>John Bayer</p>
          </div>
          <div className="nav nav-img">
            <img src={Profile} alt="" />
          </div>{' '}
          <div className="nav-icon">
            <i class="bx bx-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="tool-bar">
        <div className="dash">
          <h3>Dashboard</h3>
          <p>
            Monday, <span className="text-secondary">02 july 2020</span>
          </p>
        </div>
        <div className="add">
          <button onClick={handleClickAdd} className="btn-nav">
            <i class="bx bx-plus-medical"></i>Add
          </button>
          <div className="search">
            <i class="bx bx-search"></i>
            <input type="text" placeholder="Search for Application here" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

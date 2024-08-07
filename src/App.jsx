import { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css'
import ShopIntro from './components/ShopIntro/ShopIntro';

const App = () => {
  
  return (
    <>
      <header>
        <nav>
          <h1>Store Name</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App

import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  
  return (
    <>
      <header>
        <Navbar />
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

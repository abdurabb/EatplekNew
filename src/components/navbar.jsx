import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      {isOpen && (
        <ul>
          <li className='' >Home</li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
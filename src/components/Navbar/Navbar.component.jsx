import React from 'react';
import './Navbar.styles.css';
import Input from '@mui/material/Input';

const Navbar = () => {
  return (
    <div className="nav">
      <Input
        className="nav-input"
        defaultValue="Untitled Form"
        style={{ fontSize: '2rem' }}
        multiline
      />
      <Input
        className="nav-input"
        placeholder="Form description"
        style={{ fontSize: '1rem' }}
        multiline
      />
    </div>
  );
};

export default Navbar;

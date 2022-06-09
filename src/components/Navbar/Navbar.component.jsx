import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Navbar.styles.css';
import Input from '@mui/material/Input';
import { updateName, updateDesc } from '../../redux/about/about.actions';
import store from '../../redux/store';

const Navbar = ({ name, description }) => {
  return (
    <div className="nav">
      <Input
        className="nav-input"
        defaultValue="Untitled Form"
        style={{ fontSize: '2rem' }}
        multiline
        value={name}
        onChange={(event) => {
          store.dispatch(updateName(event.target.value));
        }}
      />
      <Input
        className="nav-input"
        placeholder="Form description"
        style={{ fontSize: '1rem' }}
        multiline
        value={description}
        onChange={(event) => {
          store.dispatch(updateDesc(event.target.value));
        }}
      />
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.about.name,
  description: state.about.description,
});

export default connect(mapStateToProps)(Navbar);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.styles.css';
import { TextField, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import types from '../../assets/types';
import store from '../../redux/store';
import {
  updateTitle,
  updateType,
  // toggleActive,
} from '../../redux/questions/questions.actions';

const Header = ({ info }) => {
  const { title, type } = info;
  return (
    <div className="question-header">
      <TextField
        id="question-name"
        label="Question"
        value={title}
        onChange={(event) =>
          store.dispatch(updateTitle(info.id, event.target.value))
        }
        variant="filled"
        style={{ width: '40%' }}
      />
      <TextField
        id="question-type"
        label="Type"
        variant="outlined"
        select
        value={type}
        onChange={(event) =>
          store.dispatch(updateType(info.id, event.target.value))
        }
        style={{ width: '50%' }}
      >
        {types.map((option) => {
          return (
            <MenuItem
              key={option.value}
              value={option.value}
              className="question-type-option"
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.label} />
            </MenuItem>
          );
        })}
      </TextField>
    </div>
  );
};

Header.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(Header);

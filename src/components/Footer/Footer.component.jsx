import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Footer.styles.css';
import { IconButton, Divider, FormControlLabel, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

import store from '../../redux/store';
import {
  deleteQuestion,
  duplicateQuestion,
  toggleRequired,
  addQuestion,
  // toggleActive,
} from '../../redux/questions/questions.reducer';

const Footer = ({ info }) => {
  return (
    <div>
      <br />
      <Divider />

      {/* Footer */}
      <div className="question-footer">
        <IconButton
          aria-label="duplicate"
          onClick={() => store.dispatch(addQuestion(info.id))}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          aria-label="duplicate"
          onClick={() => store.dispatch(duplicateQuestion(info.id))}
        >
          <ContentCopyIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => store.dispatch(deleteQuestion(info.id))}
        >
          <DeleteIcon />
        </IconButton>
        <FormControlLabel
          control={
            <Switch
              checked={info.isRequired}
              onChange={() => store.dispatch(toggleRequired(info.id))}
            />
          }
          label="Required"
          labelPlacement="start"
        />
      </div>
    </div>
  );
};

Footer.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(Footer);

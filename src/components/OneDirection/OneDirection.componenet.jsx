import React from 'react';
import PropTypes from 'prop-types';

import { IconButton, Input } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const OneDirection = ({ index, option, isLast, handleDeleteSingleOption }) => {
  const handle = () => {
    handleDeleteSingleOption(index);
  };
  return (
    <div>
      <Input className="question-body-short-answer" value={option} multiline />
      {!isLast ? (
        <IconButton aria-label="delete" onClick={handle}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </div>
  );
};

OneDirection.propTypes = {
  index: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  handleDeleteSingleOption: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default OneDirection;

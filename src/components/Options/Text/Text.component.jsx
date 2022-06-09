import React from 'react';
import PropTypes from 'prop-types';
// import './Body.styles.css';
import { Input, InputAdornment } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Text = ({ text, type }) => {
  return (
    <div>
      <Input
        className="question-body-short-answer"
        value={text}
        disabled
        multiline
        endAdornment={
          <InputAdornment position="end">
            {type === 'time' ? <AccessTimeIcon /> : <DateRangeIcon />}
          </InputAdornment>
        }
      />
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Text;

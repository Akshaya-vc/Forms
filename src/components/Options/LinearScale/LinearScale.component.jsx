import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './LinearScale.styles.css';
import {
  //   FormControlLabel,
  Input,
  MenuItem,
  TextField,
  // IconButton,
} from '@mui/material';

import store from '../../../redux/store';
import {
  updateLinearScaleRange,
  updateLinearScaleLabel,
} from '../../../redux/questions/questions.reducer';

const LinearScale = ({ info }) => {
  const range1 = [
    { value: 0, label: 0 },
    { value: 1, label: 1 },
  ];
  const range2 = [];
  for (let i = 2; i < 11; i += 1) {
    range2.push({ value: i, label: i });
  }
  const handleScales = (value, rangeName, rangeList) => {
    return (
      <TextField
        id="linear-range"
        label={rangeName}
        variant="standard"
        select
        value={value}
        onChange={(event) =>
          store.dispatch(
            updateLinearScaleRange(info.id, rangeName, event.target.value)
          )
        }
        style={{ width: '20%' }}
      >
        {rangeList.map((option) => {
          return (
            <MenuItem
              key={option.value}
              value={option.value}
              className="question-type-option"
            >
              {option.label}
            </MenuItem>
          );
        })}
      </TextField>
    );
  };
  return (
    <div className="linear-scale">
      <br />

      <div className="linear-scale-ranges">
        {handleScales(info.body.linearScale.range1, 'range1', range1)}
        {handleScales(info.body.linearScale.range2, 'range2', range2)}
      </div>
      <br />
      <div className="linear-scale-labels">
        <div className="linear-scale-label-row">
          {info.body.linearScale.range1} &nbsp;&nbsp;
          <Input
            defaultValue="Untitled Form"
            style={{ fontSize: '1rem' }}
            multiline
            value={info.body.linearScale.label1}
            onChange={(event) => {
              store.dispatch(
                updateLinearScaleLabel(info.id, 'label1', event.target.value)
              );
            }}
          />
        </div>
        <div className="linear-scale-label-row">
          {info.body.linearScale.range2} &nbsp;&nbsp;
          <Input
            defaultValue="Untitled Form"
            style={{ fontSize: '1rem' }}
            multiline
            value={info.body.linearScale.label2}
            onChange={(event) => {
              store.dispatch(
                updateLinearScaleLabel(info.id, 'label2', event.target.value)
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

LinearScale.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(LinearScale);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './File.styles.css';
import {
  FormControlLabel,
  Switch,
  TextField,
  MenuItem,
  Checkbox,
} from '@mui/material';
import store from '../../../redux/store';
import {
  toggleSpecific,
  updateFileRange,
  toggleSpecificValue,
} from '../../../redux/questions/questions.actions';

const File = ({ info }) => {
  const total = [
    { value: '1', label: '1' },
    { value: '5', label: '5' },
    { value: '10', label: '10' },
  ];
  const size = [
    { value: '1 MB', label: '1 MB' },
    { value: '10 MB', label: '10 MB' },
    { value: '100 MB', label: '100 MB' },
    { value: '1 GB', label: '1 GB' },
    { value: '10 GB', label: '10 GB' },
  ];
  const range2 = [];
  for (let i = 2; i < 11; i += 1) {
    range2.push({ value: i, label: i });
  }
  const handleScales = (value, rangeName, rangeList) => {
    return (
      <div className="file-range">
        <div className="range-text">
          {rangeName === 'size'
            ? 'Maximum file size'
            : 'Maximum number of files'}
        </div>
        <TextField
          label={rangeName}
          variant="standard"
          select
          value={value}
          onChange={(event) =>
            store.dispatch(
              updateFileRange(info.id, rangeName, event.target.value)
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
      </div>
    );
  };
  return (
    <div className="file">
      <div className="file-option">
        <FormControlLabel
          control={
            <Switch
              checked={info.body.fileUpload.isSpecific}
              onChange={() => store.dispatch(toggleSpecific(info.id))}
            />
          }
          label="Allow only specific file types"
          labelPlacement="start"
        />
        <div className="file-specific-option">
          {info.body.fileUpload.isSpecific &&
            info.body.fileUpload.specific.map((file) => {
              return (
                <FormControlLabel
                  value={file.value}
                  control={
                    <Checkbox
                      checked={file.isChecked}
                      onChange={() =>
                        store.dispatch(toggleSpecificValue(info.id, file.value))
                      }
                    />
                  }
                  label={file.value}
                  labelPlacement="end"
                />
              );
            })}
        </div>
      </div>
      {handleScales(info.body.fileUpload.total, 'total', total)}
      {handleScales(info.body.fileUpload.size, 'size', size)}
    </div>
  );
};

File.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(File);

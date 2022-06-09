import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TwoDimension.styles.css';
import {
  FormControlLabel,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  // IconButton,
} from '@mui/material';

import store from '../../../redux/store';
import { update2dOption } from '../../../redux/questions/questions.actions';

const TwoDimension = ({ info }) => {
  const { type } = info;
  const handleOneDirection = () => {
    const mulipleChoice = <FormControlLabel control={<Radio />} disabled />;
    const checkBox = <FormControlLabel control={<Checkbox />} disabled />;
    return (
      <div>{type === 'multiple-choice-grid' ? mulipleChoice : checkBox}</div>
    );
  };

  return (
    <div className="twodimension">
      <div className="twodimension-row">
        <h4>Row</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {info.body.multiple.row.map((option, index) => {
            return (
              <div className="question-onedirection">
                {handleOneDirection()}
                <div>
                  <Input
                    className="question-body-short-answer"
                    value={option}
                    onChange={(e) =>
                      store.dispatch(
                        update2dOption(info.id, 'row', index, e.target.value)
                      )
                    }
                    multiline
                  />
                </div>
              </div>
            );
          })}
        </RadioGroup>
      </div>
      <div className="twodimension-column">
        <h4>Column</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          className="twodimension-column"
          name="radio-buttons-group"
        >
          {info.body.multiple.column.map((option, index) => {
            return (
              <div className="question-onedirection">
                {handleOneDirection()}
                <div>
                  <Input
                    className="question-body-short-answer"
                    value={option}
                    onChange={(e) =>
                      store.dispatch(
                        update2dOption(info.id, 'column', index, e.target.value)
                      )
                    }
                    multiline
                  />
                  {/* {!isLast ? (
                  <IconButton aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                ) : null} */}
                </div>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};

TwoDimension.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(TwoDimension);

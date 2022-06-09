import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
} from '@mui/material';

import store from '../../../redux/store';
import { update1dOption } from '../../../redux/questions/questions.reducer';

const OneDimension = ({ info }) => {
  const { type } = info;
  const handleOneDirection = (index) => {
    const mulipleChoice = <FormControlLabel control={<Radio />} disabled />;
    const dropDown = () => <div>{index + 1}. &nbsp;</div>;
    const checkBox = <FormControlLabel control={<Checkbox />} disabled />;
    return (
      <div>
        {type === 'multiple-choice'
          ? mulipleChoice
          : type === 'dropdown'
          ? dropDown()
          : checkBox}
      </div>
    );
  };

  return (
    <div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {info.body.single.map((option, index) => {
          return (
            <div className="question-onedirection">
              {handleOneDirection(index)}
              <div>
                <Input
                  className="question-body-short-answer"
                  value={option}
                  onChange={(e) =>
                    store.dispatch(
                      update1dOption(info.id, index, e.target.value)
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
  );
};

OneDimension.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(OneDimension);

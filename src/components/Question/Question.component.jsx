import React from 'react';
import PropTypes from 'prop-types';
import './Question.styles.css';
import {
  IconButton,
  TextField,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Divider,
  FormControlLabel,
  Switch,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
} from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
// import CloseIcon from '@mui/icons-material/Close';
import OneDirection from '../OneDirection/OneDirection.componenet';
import types from '../../assets/types';

const Question = ({ info, handleInfo, addQuestion, deleteQuestion }) => {
  const { title, type, isActive } = info;
  const handleTitleChange = (event) => {
    handleInfo({ ...info, title: event.target.value });
  };
  const handleTypeChange = (event) => {
    handleInfo({ ...info, type: event.target.value });
    console.log(event.target.value);
  };
  const handleRequired = () => {
    handleInfo({ ...info, isRequired: !info.isRequired });
  };
  const handleDeleteSingleOption = (index) => {
    handleInfo({
      ...info,
      body: {
        ...info.body,
        single: info.body.single.filter((op, i) => i !== index),
      },
    });
  };

  return (
    <div
      className="question"
      style={{ borderLeft: isActive ? '10px solid #673ab7' : '0' }}
    >
      {/* Header */}
      <div className="question-header">
        <TextField
          id="question-name"
          label="Question"
          value={title}
          // value="hehe"
          onChange={handleTitleChange}
          variant="filled"
          style={{ width: '40%' }}
        />
        <TextField
          id="question-type"
          label="Type"
          variant="outlined"
          select
          value={type}
          // value="short-answer"
          // helperText="Please choose type"
          onChange={handleTypeChange}
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

      {/* Body */}
      <div className="question-body" style={{ textAlign: 'left' }}>
        {type === 'short-answer' ? (
          <Input
            className="question-body-short-answer"
            defaultValue="Short description"
            disabled
            multiline
          />
        ) : type === 'long-answer' ? (
          <Input
            className="question-body-long-answer"
            defaultValue="Long description"
            disabled
            multiline
          />
        ) : type === 'multiple-choice' ? (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {info.body.single.map((option, index) => {
              return (
                <div className="question-onedirection">
                  <FormControlLabel control={<Radio />} disabled />
                  <OneDirection
                    index={index}
                    handleDeleteSingleOption={handleDeleteSingleOption}
                    option={option}
                    isLast={info.body.single.length === 1}
                  />
                </div>
              );
            })}
            <div className="question-onedirection">
              <FormControlLabel control={<Radio />} disabled />
              <Input
                className="question-body-short-answer"
                value="Add new"
                multiline
              />
            </div>
          </RadioGroup>
        ) : type === 'checkbox' ? (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {info.body.single.map((option, index) => {
              return (
                <div className="question-onedirection">
                  <FormControlLabel control={<Checkbox />} disabled />
                  <OneDirection
                    index={index}
                    handleDeleteSingleOption={handleDeleteSingleOption}
                    option={option}
                    isLast={info.body.single.length === 1}
                  />
                </div>
              );
            })}
          </RadioGroup>
        ) : type === 'dropdown' ? (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {info.body.single.map((option, index) => {
              return (
                <div className="question-onedirection">
                  {index + 1}.&nbsp;
                  <OneDirection
                    index={index}
                    handleDeleteSingleOption={handleDeleteSingleOption}
                    option={option}
                    isLast={info.body.single.length === 1}
                  />
                </div>
              );
            })}
          </RadioGroup>
        ) : null}
      </div>
      <br />
      <Divider />

      {/* Footer */}
      <div className="question-footer">
        <IconButton aria-label="duplicate" onClick={() => addQuestion(info)}>
          <ContentCopyIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteQuestion(info.id)}>
          <DeleteIcon />
        </IconButton>
        <FormControlLabel
          control={
            <Switch checked={info.isRequired} onChange={handleRequired} />
          }
          label="Required"
          labelPlacement="start"
        />
      </div>
    </div>
  );
};

Question.propTypes = {
  info: PropTypes.arrayOf.isRequired,
  handleInfo: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
};

export default Question;

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
} from '@mui/material';

// import {
//   ShortTextIcon,
//   FormatAlignLeftIcon,
//   RadioButtonCheckedIcon,
//   CheckBoxIcon,
//   ArrowDropDownCircleIcon,
//   CloudUploadIcon,
//   DateRangeIcon,
//   AccessTimeIcon,
// } from '@mui/icons-material';
import ShortTextIcon from '@mui/icons-material/ShortText';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AppsIcon from '@mui/icons-material/Apps';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

const types = [
  { value: 'short-answer', label: 'Short answer', icon: <ShortTextIcon /> },
  { value: 'long-answer', label: 'Paragraph', icon: <FormatAlignLeftIcon /> },
  {
    value: 'multiple-choice',
    label: 'Multiple choice',
    icon: <RadioButtonCheckedIcon />,
  },
  { value: 'checkbox', label: 'Checkbox', icon: <CheckBoxIcon /> },
  { value: 'dropdown', label: 'Dropdown', icon: <ArrowDropDownCircleIcon /> },
  {
    value: 'file-upload',
    label: 'File upload',
    icon: <CloudUploadIcon />,
  },
  { value: 'linear-scale', label: 'Linear scale', icon: <LinearScaleIcon /> },
  {
    value: 'multiple-choice-grid',
    label: 'Multiple-choice grid',
    icon: <DragIndicatorIcon />,
  },
  { value: 'tick-box-grid', label: 'Tick box grid', icon: <AppsIcon /> },
  { value: 'date', label: 'Date', icon: <DateRangeIcon /> },
  { value: 'time', label: 'Time', icon: <AccessTimeIcon /> },
];

const Question = ({ info, handleInfo, addQuestion }) => {
  const { title, type, isActive } = info;
  const handleTitleChange = (event) => {
    handleInfo({ ...info, title: event.target.value });
  };
  const handleTypeChange = (event) => {
    handleInfo({ ...info, type: event.target.value });
  };
  const handleDuplicate = () => {
    addQuestion(info);
  };
  return (
    <div
      className="question"
      style={{ borderLeft: isActive ? '10px solid #673ab7' : '0' }}
    >
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
      <br />
      <Divider />
      <div className="question-footer">
        <IconButton aria-label="duplicate" onClick={handleDuplicate}>
          <ContentCopyIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <FormControlLabel
          control={<Switch defaultChecked />}
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
};

export default Question;
